/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 17:14:58
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 20:57:09
 * @Description: Defines functions for all webhook routes
 */

import { NextFunction, Request, Response } from 'express';
import { status, message } from '../../config';
import { HttpError, HttpResponse } from '../../handlers';
import { IBrowserDetails } from '../../interfaces';
import { catchAsync } from '../../middleware';
import fetch from 'node-fetch';

// Create Webhook route
const createWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { targetUrl }: { targetUrl: string } = req.body;

  // Body for fetch request
  const body = JSON.stringify({
    targetUrl,
  });

  // Fetch request to Moleculer micro-service
  const response = await fetch('http://webhook-service:3001/webhooks/register', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' },
  });

  // Extracting json from response
  const data = await response.json();

  // Forward to error handler in case of error from Moleculer micro-service
  if (response.status != 200) {
    next(new HttpError(response.status, null, response.statusText));
  }

  // Forward 'data' to response handler
  next(new HttpResponse(status.ok, data));
});

// Read Webhook route
const readWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // Fetch request to Moleculer micro-service
  const response = await fetch('http://webhook-service:3001/webhooks', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  // Extracting json from response
  const data = await response.json();

  // Forward to error handler in case of error from Moleculer micro-service
  if (response.status != 200) {
    next(new HttpError(response.status, null, response.statusText));
  }

  // Forward 'data' to response handler
  next(new HttpResponse(status.ok, data));
});

// Update Webhook route
const updateWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id, newTargetUrl }: { id: string; newTargetUrl: string } = req.body;

  // Body for fetch request
  const body = JSON.stringify({
    id,
    newTargetUrl,
  });

  // Fetch request to Moleculer micro-service
  const response = await fetch('http://webhook-service:3001/webhooks/update', {
    method: 'PATCH',
    body,
    headers: { 'Content-Type': 'application/json' },
  });

  // Extracting json from response
  const data = await response.json();

  // Forward to error handler in case of error from Moleculer micro-service
  if (response.status != 200) {
    next(new HttpError(response.status, null, response.statusText));
  }

  // Forward 'data' to response handler
  next(new HttpResponse(status.ok, data));
});

// Delete Webhook route
const deleteWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id }: { id: string } = req.body;

  // Body for fetch request
  const body = JSON.stringify({
    id,
  });

  // Fetch request to Moleculer micro-service
  const response = await fetch('http://webhook-service:3001/webhooks/delete', {
    method: 'DELETE',
    body,
    headers: { 'Content-Type': 'application/json' },
  });

  // Extracting json from response
  const data = await response.json();

  // Forward to error handler in case of error from Moleculer micro-service
  if (response.status != 200) {
    next(new HttpError(response.status, null, response.statusText));
  }

  // Forward 'data' to response handler
  next(new HttpResponse(status.ok, data));
});

// Trigger Webhook route
const triggerWebhook = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // Body for fetch request
  const body = JSON.stringify({
    ipAddress: req.connection.remoteAddress,
  });

  // Fetch request to Moleculer micro-service
  const response = await fetch('http://webhook-service:3001/webhooks/trigger', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' },
  });

  // Extracting json from response
  const data = await response.json();

  // Forward to error handler in case of error from Moleculer micro-service
  if (response.status != 200) {
    next(new HttpError(response.status, null, response.statusText));
  }

  // Forward 'data' to response handler
  next(new HttpResponse(status.ok, data));
});

export { createWebhook, readWebhook, updateWebhook, deleteWebhook, triggerWebhook };
