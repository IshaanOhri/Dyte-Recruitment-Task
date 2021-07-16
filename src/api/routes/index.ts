/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:54:44
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 15:54:44
 * @Description: Indexing file for all routes
 */

import { Router } from 'express';
import { miscRouter } from './misc';

const router: Router = Router();

router.use(miscRouter);

export { router };
