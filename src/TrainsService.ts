import axios, { AxiosError } from 'axios';
import { parseString, convertableToString, ParserOptions, Builder } from 'xml2js';
import { promisify } from 'util';
import { get, isArray, isObjectLike } from 'lodash';
import { logger } from './logger';

type Obj = { [k: string]: any };

type ParseString = (
  str: convertableToString,
  options: ParserOptions,
  callback: (err: Error | null, result: any) => void
) => void;

const toCamelCase = (str: string): string => str.charAt(0).toLocaleLowerCase() + str.slice(1);

const xml2JSON = promisify(parseString as ParseString);

export const BASE_URL = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb11.asmx';

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export namespace Trains {
  export enum Operation {
    GetDepartureBoard = 'GetDepartureBoard',
    GetDepBoardWithDetails = 'GetDepBoardWithDetails',
    GetArrivalBoard = 'GetArrivalBoard',
    GetArrBoardWithDetails = 'GetArrBoardWithDetails',
    GetArrivalDepartureBoard = 'GetArrivalDepartureBoard',
    GetArrDepBoardWithDetails = 'GetArrDepBoardWithDetails',
    GetNextDepartures = 'GetNextDepartures',
    GetNextDeparturesWithDetails = 'GetNextDeparturesWithDetails',
    GetFastestDepartures = 'GetFastestDepartures',
    GetFastestDeparturesWithDetails = 'GetFastestDeparturesWithDetails',
    GetServiceDetails = 'GetServiceDetails',
  }

  // Data for Board Calls
  export type Board = {
    numRows?: number;
    crs: string;
    filterCrs?: string;
    filterType?: string;
    timeOffset?: number;
    timeWindow?: number;
  };

  // Data for Departure Calls
  export type Departure = {
    crs: string;
    filterList?: string[];
    timeOffset?: number;
    timeWindow?: number;
  };

  // Data for the GetServiceDetails call
  export type Service = {
    serviceID: string;
  };

  export type Payload = Board | Departure | Service;
}

export class TrainsService {
  constructXMLFromObject(obj: { [k: string]: any }) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const val = key === 'filterList' ? value.reduce((acc: string, v: string) => acc + `<crs>${v}</crs>`, '') : value;
      return acc + (typeof val !== 'undefined' ? `<${key}>${val}</${key}>` : ''); //
    }, '');
  }

  constructXMLBody(operationName: Trains.Operation, payload: Trains.Payload) {
    const body = this.constructXMLFromObject(payload);
    return `<?xml version="1.0"?>
		<Envelope xmlns="http://www.w3.org/2003/05/soap-envelope">
			<Header>
				<AccessToken xmlns="http://thalesgroup.com/RTTI/2013-11-28/Token/types">
					<TokenValue>${ACCESS_TOKEN}</TokenValue>
				</AccessToken>
			</Header>
			<Body>
				<${operationName}Request xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
					${body}
				</${operationName}Request>
			</Body>
		</Envelope>`;
  }

  async fetchData(operationName: Trains.Operation, payload: Trains.Payload) {
    logger.info(`Fetching ${operationName} - [payload: ${JSON.stringify(payload)}]`);
    const xmlPayload = this.constructXMLBody(operationName, payload);
    try {
      const result = await axios({
        method: 'POST',
        url: BASE_URL,
        headers: {
          'Content-Type': 'text/xml',
        },
        data: xmlPayload,
      });
      const data = await this.parseResponse(result.data, operationName);
      return data;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        logger.error(
          `🚨Failed: Fetching ${operationName} - [${e.response?.status} - ${e.code}] - [${
            e.message
          }] - [payload: ${JSON.stringify(payload)}] - [response: ${JSON.stringify(e.response?.data)}]`
        );
      } else {
        logger.error(`🚨Failed: Parsing XML for ${operationName} - [${e}]`);
      }
      throw e;
    }
  }

  async parseResponse(result: string, operationName: Trains.Operation): Promise<Obj> {
    return await xml2JSON(result, {
      trim: true,
      ignoreAttrs: true,
      explicitArray: false,
      tagNameProcessors: [(name) => (name.includes(':') ? name.split(':')[1] : name)],
    })
      .then((data) => get(data, ['Envelope', 'Body', `${operationName}Response`]))
      .then(this.postArrayProcessor);
  }

  postArrayProcessor = (obj: Obj) => {
    objProcessor(obj, {
      callingPointList: (val: any) => getArrayValue(val?.callingPoint),
      trainServices: (trainServices) => getArrayValue(trainServices?.service),
    });
    return obj;
  };
}

const getArrayValue = (val: any) => (val ? (isArray(val) ? val : [val]) : null);

function objProcessor(obj: Obj, config: { [keyName: string]: (val: any) => any }) {
  const configKeys = Object.keys(config);
  Object.entries(obj).forEach(([key, val]) => {
    if (configKeys.includes(key)) {
      obj[key] = config[key](val);
    }
    if (isObjectLike(obj[key])) {
      objProcessor(obj[key], config);
    }
  });
  return obj;
}
