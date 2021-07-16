/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:56:57
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 16:16:45
 * @Description: Driver file of the server
 */

import cors from 'cors';
import express, { Application } from 'express';
import { PORT, HOST } from './config';
import logger from './log/config';

// Initializing Express App
const app: Application = express();

// CORS
app.use(cors());

// Body parser
app.use(express.json());

// Connect to Database
require('./database/database');

// Import routers
app.use('/api/v1', router);

// Not found handler
app.use(notFound);

// All response handlers
app.use(responseHandler);

// Start Express App
app.listen(PORT, HOST, () => {
	logger.info(`🚀 Server running on http://${HOST}:${PORT} 🚀`);
});
