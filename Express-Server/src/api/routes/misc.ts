/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 16:27:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 17:25:25
 * @Description: Contains all miscellaneous routes
 */

import { Router } from 'express';
import { health, home } from '../controllers';

const miscRouter: Router = Router();

// @desc	Home Route
// @route	GET /
miscRouter.get('/', home);

// @desc	Health Route
// @route	GET /health
miscRouter.get('/health', health);

export { miscRouter };
