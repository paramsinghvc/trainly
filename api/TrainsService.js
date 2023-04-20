"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainsService = exports.Trains = exports.BASE_URL = void 0;
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = require("xml2js");
const util_1 = require("util");
const lodash_1 = require("lodash");
const toCamelCase = (str) => str.charAt(0).toLocaleLowerCase() + str.slice(1);
const xml2JSON = (0, util_1.promisify)(xml2js_1.parseString);
exports.BASE_URL = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb11.asmx';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
var Trains;
(function (Trains) {
    let Operation;
    (function (Operation) {
        Operation["GetDepartureBoard"] = "GetDepartureBoard";
        Operation["GetDepBoardWithDetails"] = "GetDepBoardWithDetails";
        Operation["GetArrivalBoard"] = "GetArrivalBoard";
        Operation["GetArrBoardWithDetails"] = "GetArrBoardWithDetails";
        Operation["GetArrivalDepartureBoard"] = "GetArrivalDepartureBoard";
        Operation["GetArrDepBoardWithDetails"] = "GetArrDepBoardWithDetails";
        Operation["GetNextDepartures"] = "GetNextDepartures";
        Operation["GetNextDeparturesWithDetails"] = "GetNextDeparturesWithDetails";
        Operation["GetFastestDepartures"] = "GetFastestDepartures";
        Operation["GetFastestDeparturesWithDetails"] = "GetFastestDeparturesWithDetails";
        Operation["GetServiceDetails"] = "GetServiceDetails";
    })(Operation = Trains.Operation || (Trains.Operation = {}));
})(Trains = exports.Trains || (exports.Trains = {}));
class TrainsService {
    constructor() {
        this.postArrayProcessor = (obj) => {
            objProcessor(obj, {
                callingPointList: (val) => getArrayValue(val === null || val === void 0 ? void 0 : val.callingPoint),
                trainServices: (trainServices) => getArrayValue(trainServices === null || trainServices === void 0 ? void 0 : trainServices.service),
            });
            return obj;
        };
    }
    constructXMLFromObject(obj) {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            const val = key === 'filterList' ? value.reduce((acc, v) => acc + `<crs>${v}</crs>`, '') : value;
            return acc + (typeof val !== 'undefined' ? `<${key}>${val}</${key}>` : ''); //
        }, '');
    }
    constructXMLBody(operationName, payload) {
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
    fetchData(operationName, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const xmlPayload = this.constructXMLBody(operationName, payload);
            console.log(xmlPayload);
            const result = yield (0, axios_1.default)({
                method: 'POST',
                url: exports.BASE_URL,
                headers: {
                    'Content-Type': 'text/xml',
                },
                data: xmlPayload,
            });
            const data = yield this.parseResponse(result.data, operationName);
            return data;
        });
    }
    parseResponse(result, operationName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield xml2JSON(result, {
                trim: true,
                ignoreAttrs: true,
                explicitArray: false,
                tagNameProcessors: [(name) => (name.includes(':') ? name.split(':')[1] : name)],
            })
                .then((data) => (0, lodash_1.get)(data, ['Envelope', 'Body', `${operationName}Response`]))
                .then(this.postArrayProcessor);
        });
    }
}
exports.TrainsService = TrainsService;
const getArrayValue = (val) => (val ? ((0, lodash_1.isArray)(val) ? val : [val]) : null);
function objProcessor(obj, config) {
    const configKeys = Object.keys(config);
    Object.entries(obj).forEach(([key, val]) => {
        if (configKeys.includes(key)) {
            obj[key] = config[key](val);
        }
        if ((0, lodash_1.isObjectLike)(obj[key])) {
            objProcessor(obj[key], config);
        }
    });
    return obj;
}
