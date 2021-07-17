/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 17:10:10
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 17:14:08
 * @Description: Contains all webhook routes
 */

import { Router } from 'express';
import { createWebhook, readWebhook, updateWebhook, deleteWebhook, triggerWebhook } from '../controllers';

const webhookRouter: Router = Router();

// @desc	Create Webhook
// @route POST /webhook/create
webhookRouter.post('/webhook/create', createWebhook);

// @desc	Read Webhook
// @route GET /webhook/read
webhookRouter.get('/webhook/read', readWebhook);

// @desc	Update Webhook
// @route PATCH /webhook/update
webhookRouter.patch('/webhook/update', updateWebhook);

// @desc	Delete Webhook
// @route DELETE /webhook/delete
webhookRouter.delete('/webhook/delete', deleteWebhook);

// @desc	Trigger Webhook
// @route POST /ip
webhookRouter.post('/ip', triggerWebhook);

export { webhookRouter };
