/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 17:57:13
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 18:02:21
 * @Description: Contains the configuration for morgan
 */

import { Request, Response } from 'express';
import morgan from 'morgan';
import logger from '../log/config';

export const morganConfig = morgan((tokens: any, req: Request, res: Response) => {
  logger.info(
    `Method: ${tokens.method(req, res)} URL: ${tokens.url(req, res)} Status: ${tokens.status(
      req,
      res
    )} Resp Time: ${tokens['response-time'](req, res)} ms`
  );
  return null;
});
