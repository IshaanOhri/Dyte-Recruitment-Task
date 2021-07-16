/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:53:35
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 15:53:35
 * @Description: Configuration for Log4js
 */

import { configure, getLogger } from 'log4js';
import path from 'path';

configure({
	appenders: {
		fileAppender: {
			type: 'file',
			filename: path.join(__dirname, './logs.log'),
		},
		console: {
			type: 'console',
		},
	},
	categories: {
		default: {
			appenders: ['fileAppender', 'console'],
			level: 'info',
		},
	},
});

const logger = getLogger();

export default logger;