import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import express, { Application } from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

import { resolvers } from './resolvers';

const app: Application = express();
const port: number = 3001;

const server = new ApolloServer<any>({
  typeDefs: readFileSync(path.resolve(__dirname, 'schema.gql'), { encoding: 'utf-8' }),
  resolvers,
});

async function init() {
  await server.start();
  app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(server));
}

init();

app.listen(port, function () {
  console.log(`App is listening on port ${port}! 🚀`);
});
