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
exports.resolvers = void 0;
const TrainsService_1 = require("../TrainsService");
const crs_1 = __importDefault(require("../crs"));
const cache_1 = require("../cache");
const trainsService = new TrainsService_1.TrainsService();
exports.resolvers = {
    Query: {
        getDepBoardWithDetails(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetDepBoardWithDetails, payload);
        },
        getDepartureBoard(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetDepartureBoard, payload);
        },
        getArrivalBoard(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetArrivalBoard, payload);
        },
        getArrBoardWithDetails(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetArrBoardWithDetails, payload);
        },
        getArrivalDepartureBoard(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetArrivalDepartureBoard, payload);
        },
        getArrDepBoardWithDetails(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetArrDepBoardWithDetails, payload);
        },
        getNextDepartures(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetNextDepartures, payload);
        },
        getNextDeparturesWithDetails(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetNextDeparturesWithDetails, payload);
        },
        getFastestDepartures(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetFastestDepartures, payload);
        },
        getFastestDeparturesWithDetails(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetFastestDeparturesWithDetails, payload);
        },
        getServiceDetails(_, { payload }) {
            return trainsService.fetchData(TrainsService_1.Trains.Operation.GetServiceDetails, payload);
        },
        getCRSCodes() {
            return (0, cache_1.checkKeyIfNotSetIt)('CRSCodes', crs_1.default);
        },
        getTrains(_, { payload }) {
            var _a, _b, _c, _d, _e;
            return __awaiter(this, void 0, void 0, function* () {
                if (!((payload === null || payload === void 0 ? void 0 : payload.fromCRS) || (payload === null || payload === void 0 ? void 0 : payload.toCRS)))
                    throw new Error('Provide one of From or To parameters');
                const CACHE_KEY = `${payload === null || payload === void 0 ? void 0 : payload.fromCRS} - ${payload === null || payload === void 0 ? void 0 : payload.toCRS}`;
                if (cache_1.cache.has(CACHE_KEY))
                    return cache_1.cache.get(CACHE_KEY);
                const doBothExist = (payload === null || payload === void 0 ? void 0 : payload.fromCRS) && (payload === null || payload === void 0 ? void 0 : payload.toCRS);
                const data = (yield trainsService.fetchData(TrainsService_1.Trains.Operation.GetArrDepBoardWithDetails, {
                    crs: ((_a = payload === null || payload === void 0 ? void 0 : payload.fromCRS) !== null && _a !== void 0 ? _a : payload === null || payload === void 0 ? void 0 : payload.toCRS),
                    filterCrs: doBothExist ? payload === null || payload === void 0 ? void 0 : payload.toCRS : undefined,
                    filterType: doBothExist ? 'to' : undefined,
                    numRows: payload === null || payload === void 0 ? void 0 : payload.numRows,
                    timeOffset: payload === null || payload === void 0 ? void 0 : payload.timeOffset,
                    timeWindow: payload === null || payload === void 0 ? void 0 : payload.timeWindow,
                }));
                const response = {
                    generatedAt: (_b = data.GetStationBoardResult) === null || _b === void 0 ? void 0 : _b.generatedAt,
                    trainServices: (_e = (_d = (_c = data.GetStationBoardResult) === null || _c === void 0 ? void 0 : _c.trainServices) === null || _d === void 0 ? void 0 : _d.filter((service) => {
                        var _a, _b, _c, _d;
                        const isFromOnly = (payload === null || payload === void 0 ? void 0 : payload.fromCRS) && !(payload === null || payload === void 0 ? void 0 : payload.toCRS);
                        const isToOnly = (payload === null || payload === void 0 ? void 0 : payload.toCRS) && !(payload === null || payload === void 0 ? void 0 : payload.fromCRS);
                        const bothExist = (payload === null || payload === void 0 ? void 0 : payload.fromCRS) && (payload === null || payload === void 0 ? void 0 : payload.toCRS);
                        return ((isFromOnly && (payload === null || payload === void 0 ? void 0 : payload.fromCRS) !== ((_b = (_a = service.destination) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.crs)) ||
                            (isToOnly && (payload === null || payload === void 0 ? void 0 : payload.toCRS) !== ((_d = (_c = service.origin) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.crs)) ||
                            bothExist);
                    })) === null || _e === void 0 ? void 0 : _e.map((service) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                        const fromCRS = (_a = payload === null || payload === void 0 ? void 0 : payload.fromCRS) !== null && _a !== void 0 ? _a : (_c = (_b = service.origin) === null || _b === void 0 ? void 0 : _b.location) === null || _c === void 0 ? void 0 : _c.crs;
                        const toCRS = (_d = payload === null || payload === void 0 ? void 0 : payload.toCRS) !== null && _d !== void 0 ? _d : (_f = (_e = service.destination) === null || _e === void 0 ? void 0 : _e.location) === null || _f === void 0 ? void 0 : _f.crs;
                        const fromCallingPoint = (_h = (_g = service.previousCallingPoints) === null || _g === void 0 ? void 0 : _g.callingPointList) === null || _h === void 0 ? void 0 : _h.find((point) => point.crs === fromCRS);
                        const toCallingPoint = (_k = (_j = service.subsequentCallingPoints) === null || _j === void 0 ? void 0 : _j.callingPointList) === null || _k === void 0 ? void 0 : _k.find((point) => point.crs === toCRS);
                        service.from = {
                            crs: fromCRS,
                            eta: (payload === null || payload === void 0 ? void 0 : payload.fromCRS) ? service.eta : fromCallingPoint === null || fromCallingPoint === void 0 ? void 0 : fromCallingPoint.et,
                            etd: (payload === null || payload === void 0 ? void 0 : payload.fromCRS) ? service.etd : fromCallingPoint === null || fromCallingPoint === void 0 ? void 0 : fromCallingPoint.et,
                            name: ((payload === null || payload === void 0 ? void 0 : payload.fromCRS)
                                ? (_l = data === null || data === void 0 ? void 0 : data.GetStationBoardResult) === null || _l === void 0 ? void 0 : _l.locationName
                                : (_o = (_m = service.origin) === null || _m === void 0 ? void 0 : _m.location) === null || _o === void 0 ? void 0 : _o.locationName),
                            platform: service.platform,
                            sta: (payload === null || payload === void 0 ? void 0 : payload.fromCRS) ? service.sta : fromCallingPoint === null || fromCallingPoint === void 0 ? void 0 : fromCallingPoint.st,
                            std: (payload === null || payload === void 0 ? void 0 : payload.fromCRS) ? service.std : fromCallingPoint === null || fromCallingPoint === void 0 ? void 0 : fromCallingPoint.st,
                        };
                        const ifOnlyToCRSExist = !(payload === null || payload === void 0 ? void 0 : payload.fromCRS) && (payload === null || payload === void 0 ? void 0 : payload.toCRS);
                        service.to = {
                            crs: toCRS,
                            eta: ifOnlyToCRSExist ? service.eta : toCallingPoint === null || toCallingPoint === void 0 ? void 0 : toCallingPoint.et,
                            etd: ifOnlyToCRSExist ? service.etd : toCallingPoint === null || toCallingPoint === void 0 ? void 0 : toCallingPoint.et,
                            name: (ifOnlyToCRSExist
                                ? (_p = data === null || data === void 0 ? void 0 : data.GetStationBoardResult) === null || _p === void 0 ? void 0 : _p.locationName
                                : (_r = (_q = service.destination) === null || _q === void 0 ? void 0 : _q.location) === null || _r === void 0 ? void 0 : _r.locationName),
                            platform: ifOnlyToCRSExist ? service.platform : undefined,
                            sta: ifOnlyToCRSExist ? service.sta : toCallingPoint === null || toCallingPoint === void 0 ? void 0 : toCallingPoint.st,
                            std: ifOnlyToCRSExist ? service.std : toCallingPoint === null || toCallingPoint === void 0 ? void 0 : toCallingPoint.st,
                        };
                        return service;
                    }),
                };
                cache_1.cache.set(CACHE_KEY, response, 60);
                return response;
            });
        },
    },
};
//# sourceMappingURL=index.js.map