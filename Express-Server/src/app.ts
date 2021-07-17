/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:56:57
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 14:15:11
 * @Description: Driver file of the server
 */

import cors from 'cors';
import express, { Application } from 'express';
import { router } from './api/routes';
import { PORT, HOST, NODE_ENV, morganConfig } from './config';
import logger from './log/config';
import * as useragent from 'express-useragent';
import { notFound, responseHandler } from './middleware';

// Initializing Express App
const app: Application = express();

// CORS
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for exposing user-agent
app.use(useragent.express());

// Include Morgan for development environment
if (NODE_ENV === 'development') {
  app.use(morganConfig);
}

// Connect to Database
require('./database/database');

// Import routers
app.use(router);

// Not found handler
app.use(notFound);

// All response handlers
app.use(responseHandler);

// Start Express App
app.listen(PORT, HOST, () => {
  logger.info(`🚀 Server running on http://${HOST}:${PORT} 🚀`);
});
