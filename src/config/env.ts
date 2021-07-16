/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:50:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 16:06:37
 * @Description: Collective export of all environment variables
 */

export const NODE_ENV: string = String(process.env.NODE_ENV);
export const PORT: number = Number(process.env.PORT);
export const HOST: string = String(process.env.HOST);