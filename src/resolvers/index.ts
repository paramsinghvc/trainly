import { Resolvers } from '../generated/graphql';
import { Trains, TrainsService } from '../TrainsService';
import crsCodes from '../crs';

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
      return crsCodes;
    },
  },
};
