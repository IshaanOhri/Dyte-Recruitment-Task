/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 17:14:58
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 17:28:17
 * @Description: Defines functions for all webhook routes
 */

import { NextFunction, Request, Response } from 'express';
import { status, message } from '../../config';
import { HttpResponse } from '../../handlers';
import { IBrowserDetails } from '../../interfaces';
import { catchAsync } from '../../middleware';

// Create Webhook route
const createWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { targetUrl }: { targetUrl: string } = req.body;
  // register webhook
  next(new HttpResponse(status.ok, null, message.homeRoute));
});

// Read Webhook route
const readWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // list webhook
  next(new HttpResponse(status.ok, null, message.homeRoute));
});

// Update Webhook route
const updateWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id, newTargetUrl }: { id: string; newTargetUrl: string } = req.body;
  // update webhook
  next(new HttpResponse(status.ok, null, message.homeRoute));
});

// Delete Webhook route
const deleteWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id }: { id: string } = req.body;
  // delete webhook
  next(new HttpResponse(status.ok, null, message.homeRoute));
});

// Trigger Webhook route
const triggerWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { ip }: { ip: string } = req.body;
  // trigger webhook
  next(new HttpResponse(status.ok, null, message.homeRoute));
});

export { createWebhook, readWebhook, updateWebhook, deleteWebhook, triggerWebhook };
