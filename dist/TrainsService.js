"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainsService = exports.Trains = exports.BASE_URL = void 0;
const axios_1 = __importStar(require("axios"));
const xml2js_1 = require("xml2js");
const util_1 = require("util");
const lodash_1 = require("lodash");
const logger_1 = require("./logger");
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
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.logger.info(`Fetching ${operationName} - [payload: ${JSON.stringify(payload)}]`);
            const xmlPayload = this.constructXMLBody(operationName, payload);
            try {
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
            }
            catch (e) {
                if (e instanceof axios_1.AxiosError) {
                    logger_1.logger.error(`🚨Failed: Fetching ${operationName} - [${(_a = e.response) === null || _a === void 0 ? void 0 : _a.status} - ${e.code}] - [${e.message}] - [payload: ${JSON.stringify(payload)}] - [response: ${JSON.stringify((_b = e.response) === null || _b === void 0 ? void 0 : _b.data)}]`);
                }
                else {
                    logger_1.logger.error(`🚨Failed: Parsing XML for ${operationName} - [${e}]`);
                }
                throw e;
            }
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
//# sourceMappingURL=TrainsService.js.map