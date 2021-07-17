/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 17:10:10
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 17:27:39
 * @Description: Contains all webhook routes
 */

import { Router } from 'express';
import { createWebhook, readWebhook, updateWebhook, deleteWebhook, triggerWebhook } from '../controllers';

const webhookRouter: Router = Router();

// @desc	Create Webhook
// @route POST /webhook/create
webhookRouter.use('/webhook/create', createWebhook);

// @desc	Read Webhook
// @route GET /webhook/read
webhookRouter.use('/webhook/read', readWebhook);

// @desc	Update Webhook
// @route PATCH /webhook/update
webhookRouter.use('/webhook/update', updateWebhook);

// @desc	Delete Webhook
// @route DELETE /webhook/delete
webhookRouter.use('/webhook/delete', deleteWebhook);

// @desc	Trigger Webhook
// @route POST /ip
webhookRouter.use('/ip', triggerWebhook);

export { webhookRouter };
