import * as express from 'express';
import { crud } from './crud';

const app = express();

const api = '/api';
const path = './storage';

const endpoints = ['icons', 'images', 'photos'];

endpoints.map((endpoint) =>
  app.use(`${api}/${endpoint}`, crud(endpoint, path))
);

export { app };
