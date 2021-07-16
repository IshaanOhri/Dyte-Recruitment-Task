/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:54:44
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 17:21:27
 * @Description: Indexing file for all routes
 */

import { Router } from 'express';
import { miscRouter } from './misc';
import { webhookRouter } from './webhooks';

const router: Router = Router();

router.use(webhookRouter);
router.use(miscRouter);

export { router };
