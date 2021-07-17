/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-17 13:42:19
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 14:38:29
 * @Description: Moleculer schema for API Gateway service
 */

const ApiGateway = require('moleculer-web');
const { PORT } = require('../config/env');

module.exports = {
  // Service name
  name: 'api',

  mixins: [ApiGateway],

  settings: {
    // Exposed port
    port: PORT,

    // Exposed IP
    ip: '0.0.0.0',

    use: [],

    routes: [
      {
        path: '',

        whitelist: ['**'],

        use: [],

        mergeParams: true,

        authentication: false,

        authorization: false,

        autoAliases: true,

        aliases: {},

        callingOptions: {},

        bodyParsers: {
          json: {
            strict: false,
            limit: '1MB',
          },
          urlencoded: {
            extended: true,
            limit: '1MB',
          },
        },

        mappingPolicy: 'all', // Available values: "all", "restrict"

        // Enable/disable logging
        logging: true,
      },
    ],

    // Do not log client side errors (does not log an error response when the error.code is 400<=X<500)
    log4XXResponses: false,
    // Logging the request parameters. Set to any log level to enable it. E.g. "info"
    logRequestParams: null,
    // Logging the response data. Set to any log level to enable it. E.g. "info"
    logResponseData: null,
  },
};
