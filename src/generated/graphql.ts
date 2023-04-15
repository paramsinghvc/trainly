import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BoardInput = {
  crs: Scalars['String'];
  filterCrs?: InputMaybe<Scalars['String']>;
  filterType?: InputMaybe<Scalars['String']>;
  numRows?: InputMaybe<Scalars['Int']>;
  timeOffset?: InputMaybe<Scalars['Int']>;
  timeWindow?: InputMaybe<Scalars['Int']>;
};

export type CrsCode = {
  __typename?: 'CRSCode';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CallingPoint = {
  __typename?: 'CallingPoint';
  crs?: Maybe<Scalars['String']>;
  et?: Maybe<Scalars['String']>;
  locationName?: Maybe<Scalars['String']>;
  st?: Maybe<Scalars['String']>;
};

export type DepartureDestination = {
  __typename?: 'DepartureDestination';
  service?: Maybe<Service>;
};

export type DepartureInput = {
  crs: Scalars['String'];
  filterList?: InputMaybe<Array<Scalars['String']>>;
  timeOffset?: InputMaybe<Scalars['Int']>;
  timeWindow?: InputMaybe<Scalars['Int']>;
};

export type Departures = {
  __typename?: 'Departures';
  destination?: Maybe<DepartureDestination>;
};

export type DeparturesBoard = {
  __typename?: 'DeparturesBoard';
  crs?: Maybe<Scalars['String']>;
  departures?: Maybe<Departures>;
  generatedAt?: Maybe<Scalars['String']>;
  locationName?: Maybe<Scalars['String']>;
  platformAvailable?: Maybe<Scalars['String']>;
};

export type Destination = {
  __typename?: 'Destination';
  location?: Maybe<Location>;
};

export type GetBoardResponse = {
  __typename?: 'GetBoardResponse';
  GetStationBoardResult?: Maybe<GetStationBoardResult>;
};

export type GetDeparturesBoardResponse = {
  __typename?: 'GetDeparturesBoardResponse';
  DeparturesBoard?: Maybe<DeparturesBoard>;
};

export type GetServiceDetailsResponse = {
  __typename?: 'GetServiceDetailsResponse';
  GetServiceDetailsResult?: Maybe<Service>;
};

export type GetStationBoardResult = {
  __typename?: 'GetStationBoardResult';
  crs?: Maybe<Scalars['String']>;
  generatedAt?: Maybe<Scalars['String']>;
  locationName?: Maybe<Scalars['String']>;
  platformAvailable?: Maybe<Scalars['String']>;
  trainServices?: Maybe<Array<Service>>;
};

export type Location = {
  __typename?: 'Location';
  crs?: Maybe<Scalars['String']>;
  locationName?: Maybe<Scalars['String']>;
};

export type Origin = {
  __typename?: 'Origin';
  location?: Maybe<Location>;
};

export type PreviousCallingPoints = {
  __typename?: 'PreviousCallingPoints';
  callingPointList?: Maybe<Array<CallingPoint>>;
};

export type Query = {
  __typename?: 'Query';
  getArrBoardWithDetails: GetBoardResponse;
  getArrDepBoardWithDetails: GetBoardResponse;
  getArrivalBoard: GetBoardResponse;
  getArrivalDepartureBoard: GetBoardResponse;
  getCRSCodes: Array<CrsCode>;
  getDepBoardWithDetails: GetBoardResponse;
  getDepartureBoard: GetBoardResponse;
  getFastestDepartures: GetDeparturesBoardResponse;
  getFastestDeparturesWithDetails: GetDeparturesBoardResponse;
  getNextDepartures: GetDeparturesBoardResponse;
  getNextDeparturesWithDetails: GetDeparturesBoardResponse;
  getServiceDetails: GetServiceDetailsResponse;
};


export type QueryGetArrBoardWithDetailsArgs = {
  payload: BoardInput;
};


export type QueryGetArrDepBoardWithDetailsArgs = {
  payload: BoardInput;
};


export type QueryGetArrivalBoardArgs = {
  payload: BoardInput;
};


export type QueryGetArrivalDepartureBoardArgs = {
  payload: BoardInput;
};


export type QueryGetDepBoardWithDetailsArgs = {
  payload: BoardInput;
};


export type QueryGetDepartureBoardArgs = {
  payload: BoardInput;
};


export type QueryGetFastestDeparturesArgs = {
  payload: DepartureInput;
};


export type QueryGetFastestDeparturesWithDetailsArgs = {
  payload: DepartureInput;
};


export type QueryGetNextDeparturesArgs = {
  payload: DepartureInput;
};


export type QueryGetNextDeparturesWithDetailsArgs = {
  payload: DepartureInput;
};


export type QueryGetServiceDetailsArgs = {
  payload: ServiceInput;
};

export type Service = {
  __typename?: 'Service';
  destination?: Maybe<Destination>;
  eta?: Maybe<Scalars['String']>;
  etd?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operatorCode?: Maybe<Scalars['String']>;
  origin?: Maybe<Origin>;
  platform?: Maybe<Scalars['String']>;
  previousCallingPoints?: Maybe<PreviousCallingPoints>;
  rsid?: Maybe<Scalars['String']>;
  serviceID?: Maybe<Scalars['String']>;
  serviceType?: Maybe<Scalars['String']>;
  sta?: Maybe<Scalars['String']>;
  std?: Maybe<Scalars['String']>;
  subsequentCallingPoints?: Maybe<SubsequentCallingPoints>;
};

export type ServiceInput = {
  serviceID: Scalars['String'];
};

export type SubsequentCallingPoints = {
  __typename?: 'SubsequentCallingPoints';
  callingPointList?: Maybe<Array<CallingPoint>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BoardInput: BoardInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CRSCode: ResolverTypeWrapper<CrsCode>;
  CallingPoint: ResolverTypeWrapper<CallingPoint>;
  DepartureDestination: ResolverTypeWrapper<DepartureDestination>;
  DepartureInput: DepartureInput;
  Departures: ResolverTypeWrapper<Departures>;
  DeparturesBoard: ResolverTypeWrapper<DeparturesBoard>;
  Destination: ResolverTypeWrapper<Destination>;
  GetBoardResponse: ResolverTypeWrapper<GetBoardResponse>;
  GetDeparturesBoardResponse: ResolverTypeWrapper<GetDeparturesBoardResponse>;
  GetServiceDetailsResponse: ResolverTypeWrapper<GetServiceDetailsResponse>;
  GetStationBoardResult: ResolverTypeWrapper<GetStationBoardResult>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Location: ResolverTypeWrapper<Location>;
  Origin: ResolverTypeWrapper<Origin>;
  PreviousCallingPoints: ResolverTypeWrapper<PreviousCallingPoints>;
  Query: ResolverTypeWrapper<{}>;
  Service: ResolverTypeWrapper<Service>;
  ServiceInput: ServiceInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubsequentCallingPoints: ResolverTypeWrapper<SubsequentCallingPoints>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BoardInput: BoardInput;
  Boolean: Scalars['Boolean'];
  CRSCode: CrsCode;
  CallingPoint: CallingPoint;
  DepartureDestination: DepartureDestination;
  DepartureInput: DepartureInput;
  Departures: Departures;
  DeparturesBoard: DeparturesBoard;
  Destination: Destination;
  GetBoardResponse: GetBoardResponse;
  GetDeparturesBoardResponse: GetDeparturesBoardResponse;
  GetServiceDetailsResponse: GetServiceDetailsResponse;
  GetStationBoardResult: GetStationBoardResult;
  Int: Scalars['Int'];
  Location: Location;
  Origin: Origin;
  PreviousCallingPoints: PreviousCallingPoints;
  Query: {};
  Service: Service;
  ServiceInput: ServiceInput;
  String: Scalars['String'];
  SubsequentCallingPoints: SubsequentCallingPoints;
};

export type CrsCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CRSCode'] = ResolversParentTypes['CRSCode']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CallingPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallingPoint'] = ResolversParentTypes['CallingPoint']> = {
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  et?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  st?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartureDestinationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DepartureDestination'] = ResolversParentTypes['DepartureDestination']> = {
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Departures'] = ResolversParentTypes['Departures']> = {
  destination?: Resolver<Maybe<ResolversTypes['DepartureDestination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeparturesBoardResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeparturesBoard'] = ResolversParentTypes['DeparturesBoard']> = {
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  departures?: Resolver<Maybe<ResolversTypes['Departures']>, ParentType, ContextType>;
  generatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platformAvailable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestinationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Destination'] = ResolversParentTypes['Destination']> = {
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetBoardResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetBoardResponse'] = ResolversParentTypes['GetBoardResponse']> = {
  GetStationBoardResult?: Resolver<Maybe<ResolversTypes['GetStationBoardResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetDeparturesBoardResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetDeparturesBoardResponse'] = ResolversParentTypes['GetDeparturesBoardResponse']> = {
  DeparturesBoard?: Resolver<Maybe<ResolversTypes['DeparturesBoard']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetServiceDetailsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetServiceDetailsResponse'] = ResolversParentTypes['GetServiceDetailsResponse']> = {
  GetServiceDetailsResult?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetStationBoardResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetStationBoardResult'] = ResolversParentTypes['GetStationBoardResult']> = {
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  generatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platformAvailable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trainServices?: Resolver<Maybe<Array<ResolversTypes['Service']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OriginResolvers<ContextType = any, ParentType extends ResolversParentTypes['Origin'] = ResolversParentTypes['Origin']> = {
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreviousCallingPointsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreviousCallingPoints'] = ResolversParentTypes['PreviousCallingPoints']> = {
  callingPointList?: Resolver<Maybe<Array<ResolversTypes['CallingPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getArrBoardWithDetails?: Resolver<ResolversTypes['GetBoardResponse'], ParentType, ContextType, RequireFields<QueryGetArrBoardWithDetailsArgs, 'payload'>>;
  getArrDepBoardWithDetails?: Resolver<ResolversTypes['GetBoardResponse'], ParentType, ContextType, RequireFields<QueryGetArrDepBoardWithDetailsArgs, 'payload'>>;
  getArrivalBoard?: Resolver<ResolversTypes['GetBoardResponse'], ParentType, ContextType, RequireFields<QueryGetArrivalBoardArgs, 'payload'>>;
  getArrivalDepartureBoard?: Resolver<ResolversTypes['GetBoardResponse'], ParentType, ContextType, RequireFields<QueryGetArrivalDepartureBoardArgs, 'payload'>>;
  getCRSCodes?: Resolver<Array<ResolversTypes['CRSCode']>, ParentType, ContextType>;
  getDepBoardWithDetails?: Resolver<ResolversTypes['GetBoardResponse'], ParentType, ContextType, RequireFields<QueryGetDepBoardWithDetailsArgs, 'payload'>>;
  getDepartureBoard?: Resolver<ResolversTypes['GetBoardResponse'], ParentType, ContextType, RequireFields<QueryGetDepartureBoardArgs, 'payload'>>;
  getFastestDepartures?: Resolver<ResolversTypes['GetDeparturesBoardResponse'], ParentType, ContextType, RequireFields<QueryGetFastestDeparturesArgs, 'payload'>>;
  getFastestDeparturesWithDetails?: Resolver<ResolversTypes['GetDeparturesBoardResponse'], ParentType, ContextType, RequireFields<QueryGetFastestDeparturesWithDetailsArgs, 'payload'>>;
  getNextDepartures?: Resolver<ResolversTypes['GetDeparturesBoardResponse'], ParentType, ContextType, RequireFields<QueryGetNextDeparturesArgs, 'payload'>>;
  getNextDeparturesWithDetails?: Resolver<ResolversTypes['GetDeparturesBoardResponse'], ParentType, ContextType, RequireFields<QueryGetNextDeparturesWithDetailsArgs, 'payload'>>;
  getServiceDetails?: Resolver<ResolversTypes['GetServiceDetailsResponse'], ParentType, ContextType, RequireFields<QueryGetServiceDetailsArgs, 'payload'>>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  destination?: Resolver<Maybe<ResolversTypes['Destination']>, ParentType, ContextType>;
  eta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  etd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatorCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['Origin']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previousCallingPoints?: Resolver<Maybe<ResolversTypes['PreviousCallingPoints']>, ParentType, ContextType>;
  rsid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  std?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subsequentCallingPoints?: Resolver<Maybe<ResolversTypes['SubsequentCallingPoints']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubsequentCallingPointsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubsequentCallingPoints'] = ResolversParentTypes['SubsequentCallingPoints']> = {
  callingPointList?: Resolver<Maybe<Array<ResolversTypes['CallingPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CRSCode?: CrsCodeResolvers<ContextType>;
  CallingPoint?: CallingPointResolvers<ContextType>;
  DepartureDestination?: DepartureDestinationResolvers<ContextType>;
  Departures?: DeparturesResolvers<ContextType>;
  DeparturesBoard?: DeparturesBoardResolvers<ContextType>;
  Destination?: DestinationResolvers<ContextType>;
  GetBoardResponse?: GetBoardResponseResolvers<ContextType>;
  GetDeparturesBoardResponse?: GetDeparturesBoardResponseResolvers<ContextType>;
  GetServiceDetailsResponse?: GetServiceDetailsResponseResolvers<ContextType>;
  GetStationBoardResult?: GetStationBoardResultResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Origin?: OriginResolvers<ContextType>;
  PreviousCallingPoints?: PreviousCallingPointsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  SubsequentCallingPoints?: SubsequentCallingPointsResolvers<ContextType>;
};

