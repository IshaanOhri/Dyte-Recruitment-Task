/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 17:10:10
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 17:21:03
 * @Description: Contains all webhook routes
 */

import { Router } from 'express';
import { createWebhook, readWebhook, updateWebhook, deleteWebhook } from '../controllers';

const webhookRouter: Router = Router();

// @desc	Create Webhook
// @route POST /webhook/create
webhookRouter.use('/create', createWebhook);

// @desc	Read Webhook
// @route GET /webhook/read
webhookRouter.use('/read', readWebhook);

// @desc	Update Webhook
// @route PATCH /webhook/update
webhookRouter.use('/update', updateWebhook);

// @desc	Delete Webhook
// @route DELETE /webhook/delete
webhookRouter.use('/delete', deleteWebhook);

export { webhookRouter };
