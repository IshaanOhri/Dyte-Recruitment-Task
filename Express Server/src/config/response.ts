/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-16 15:51:13
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-16 15:51:45
 * @Description: All response codes and messages
 */

const status = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
};

const message = {
  homeRoute: 'Hello World. Welcome to Node.js Server!',
  healthRoute: 'Node.js backend running successfully!',
  notFound: 'The requested route does not exist.',
  serverError: 'An internal server error occurred. Please try again.',
};

export { status, message };
