/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:50:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 18:36:18
 * @Description: Collective export of all environment variables
 */

const NODE_ENV = String(process.env.NODE_ENV || 'development');
const PORT = Number(process.env.PORT || 3001);
const HOST = String(process.env.HOST);
const MONGO_URI = String(process.env.MONGO_URI);

module.exports = { NODE_ENV, PORT, HOST, MONGO_URI };
