/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 16:27:58
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 17:25:46
 * @Description: Defines functions for all miscellaneous routes
 */

import { NextFunction, Request, Response } from 'express';
import { status, message } from '../../config';
import { HttpResponse } from '../../handlers';
import { IBrowserDetails } from '../../interfaces';
import { catchAsync } from '../../middleware';

// Home route
const home = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  next(new HttpResponse(status.ok, null, message.homeRoute));
});

// Health route
const health = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const browserDetails: IBrowserDetails = {
    browser: req.useragent?.browser,
    version: req.useragent?.version,
    os: req.useragent?.os,
    platform: req.useragent?.platform,
    source: req.useragent?.source,
  };

  next(new HttpResponse(status.ok, { browserDetails }, message.healthRoute));
});

export { home, health };
