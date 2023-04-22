import { GetBoardResponse, GetStationBoardResult, GetTrainsResponse, Resolvers } from '../generated/graphql';
import { Trains, TrainsService } from '../TrainsService';
import crsCodes from '../crs';
import { cache, checkKeyIfNotSetIt } from '../cache';

const trainsService = new TrainsService();

export const resolvers: Resolvers = {
  Query: {
    getDepBoardWithDetails(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetDepBoardWithDetails, payload);
    },
    getDepartureBoard(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetDepartureBoard, payload);
    },
    getArrivalBoard(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetArrivalBoard, payload);
    },
    getArrBoardWithDetails(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetArrBoardWithDetails, payload);
    },
    getArrivalDepartureBoard(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetArrivalDepartureBoard, payload);
    },
    getArrDepBoardWithDetails(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetArrDepBoardWithDetails, payload);
    },
    getNextDepartures(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetNextDepartures, payload);
    },
    getNextDeparturesWithDetails(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetNextDeparturesWithDetails, payload);
    },
    getFastestDepartures(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetFastestDepartures, payload);
    },
    getFastestDeparturesWithDetails(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetFastestDeparturesWithDetails, payload);
    },
    getServiceDetails(_, { payload }) {
      return trainsService.fetchData(Trains.Operation.GetServiceDetails, payload);
    },
    getCRSCodes() {
      return checkKeyIfNotSetIt('CRSCodes', crsCodes)!;
    },
    async getTrains(_, { payload }) {
      if (!(payload?.fromCRS || payload?.toCRS)) throw new Error('Provide one of From or To parameters');
      const CACHE_KEY = `${payload?.fromCRS} - ${payload?.toCRS}`;
      if (cache.has(CACHE_KEY)) return cache.get(CACHE_KEY)!;

      const doBothExist = payload?.fromCRS && payload?.toCRS;
      const data = (await trainsService.fetchData(Trains.Operation.GetArrDepBoardWithDetails, {
        crs: (payload?.fromCRS ?? payload?.toCRS)!,
        filterCrs: doBothExist ? payload?.toCRS : undefined,
        filterType: doBothExist ? 'to' : undefined,
        numRows: payload?.numRows,
        timeOffset: payload?.timeOffset,
        timeWindow: payload?.timeWindow,
      })) as GetBoardResponse;
      const response: GetTrainsResponse = {
        generatedAt: data.GetStationBoardResult?.generatedAt,
        trainServices: data.GetStationBoardResult?.trainServices
          ?.filter((service) => {
            const isFromOnly = payload?.fromCRS && !payload?.toCRS;
            const isToOnly = payload?.toCRS && !payload?.fromCRS;
            const bothExist = payload?.fromCRS && payload?.toCRS;
            return (
              (isFromOnly && payload?.fromCRS !== service.destination?.location?.crs) ||
              (isToOnly && payload?.toCRS !== service.origin?.location?.crs) ||
              bothExist
            );
          })
          ?.map((service) => {
            const fromCRS = payload?.fromCRS ?? service.origin?.location?.crs;
            const toCRS = payload?.toCRS ?? service.destination?.location?.crs;
            const fromCallingPoint = service.previousCallingPoints?.callingPointList?.find(
              (point) => point.crs === fromCRS
            );
            const toCallingPoint = service.subsequentCallingPoints?.callingPointList?.find(
              (point) => point.crs === toCRS
            );

            service.from = {
              crs: fromCRS!,
              eta: payload?.fromCRS ? service.eta : fromCallingPoint?.et,
              etd: payload?.fromCRS ? service.etd : fromCallingPoint?.et,
              name: (payload?.fromCRS
                ? data?.GetStationBoardResult?.locationName
                : service.origin?.location?.locationName)!,
              platform: service.platform,
              sta: payload?.fromCRS ? service.sta : fromCallingPoint?.st,
              std: payload?.fromCRS ? service.std : fromCallingPoint?.st,
            };

            const ifOnlyToCRSExist = !payload?.fromCRS && payload?.toCRS;
            service.to = {
              crs: toCRS!,
              eta: ifOnlyToCRSExist ? service.eta : toCallingPoint?.et,
              etd: ifOnlyToCRSExist ? service.etd : toCallingPoint?.et,
              name: (ifOnlyToCRSExist
                ? data?.GetStationBoardResult?.locationName
                : service.destination?.location?.locationName)!,
              platform: ifOnlyToCRSExist ? service.platform : undefined,
              sta: ifOnlyToCRSExist ? service.sta : toCallingPoint?.st,
              std: ifOnlyToCRSExist ? service.std : toCallingPoint?.st,
            };

            return service;
          }),
      };

      cache.set(CACHE_KEY, response, 60);
      return response;
    },
  },
};
