/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:50:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 18:35:40
 * @Description: Collective export of all environment variables
 */

export const NODE_ENV: string = String(process.env.NODE_ENV || 'development');
export const PORT: number = Number(process.env.PORT || 3001);
export const HOST: string = String(process.env.HOST);
