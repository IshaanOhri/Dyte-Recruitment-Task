/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-17 13:41:49
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 18:17:50
 * @Description: Moleculer schema for Webhook service
 */

const DbService = require('moleculer-db');
const MongooseAdapter = require('moleculer-db-adapter-mongoose');
const Webhook = require('../models/Webhook');
const { MoleculerError } = require('moleculer').Errors;
const { message, status } = require('../config/response');
const _ = require('lodash');
const fetch = require('node-fetch');
const PromisePool = require('@supercharge/promise-pool');
var moment = require('moment');

module.exports = {
  // Service name
  name: 'webhooks',

  mixins: [DbService],

  // Mongoose database adapter
  adapter: new MongooseAdapter('mongodb://root:rootpassword@localhost:27017'),

  // MongoDB model
  model: Webhook,

  // MongoDB collection
  collection: 'webhooks',

  settings: {
    // Webhook data fields
    fields: ['_id', 'targetUrl'],

    // Webhook data field validators
    entityValidator: {
      targetUrl: 'string',
    },
  },

  // Actions
  actions: {
    // webhook.register
    register: {
      // Specify method and path for action
      rest: {
        method: 'POST',
        path: '/register',
      },

      // Specify params for action
      params: {
        targetUrl: 'string',
      },

      // Handler for action
      async handler(ctx) {
        // Creat and save new webhook
        const webhook = await Webhook.create(ctx.params);

        // Return unique 'id' in response
        return { id: webhook._id };
      },
    },

    // webhook.update
    update: {
      // Specify method and path for action
      rest: {
        method: 'PATCH',
        path: '/update',
      },

      // Specify params for action
      params: {
        id: 'string',
        newTargetUrl: 'string',
      },

      // Handler for action
      async handler(ctx) {
        // Extract 'id' and 'newTargetUrl' from 'ctx.params'
        const { id, newTargetUrl } = ctx.params;

        // Get webhook from DB
        const webhook = await Webhook.findById(id);

        // Throw 404 if webhook not found
        if (!webhook) {
          throw new MoleculerError(message.webhookNotFound, status.notFound);
        }

        // Update 'targetUrl' in webhook
        webhook.targetUrl = newTargetUrl;

        // Save webhook
        await webhook.save();

        // Return webhook in response
        return webhook;
      },
    },

    // webhook.delete
    delete: {
      // Specify method and path for action
      rest: {
        method: 'DELETE',
        path: '/delete',
      },

      // Specify params for action
      params: {
        id: 'string',
      },

      // Handler for action
      async handler(ctx) {
        const { id } = ctx.params;

        // Remove webhook
        const webhook = await Webhook.findByIdAndDelete(id);

        // Throw 404 if webhook not found
        if (!webhook) {
          throw new MoleculerError(message.webhookNotFound, status.notFound);
        }

        // Return webhook in response
        return webhook;
      },
    },

    // webhook.trigger
    trigger: {
      // Specify method and path for action
      rest: {
        method: 'POST',
        path: '/trigger',
      },

      // Specify params for action
      params: {
        ipAddress: 'string',
      },

      // Handler for action
      async handler(ctx) {
        const { ipAddress } = ctx.params;

        // Get all webhooks from DB
        const webhooks = await Webhook.find(
          {},
          {
            _id: 0,
            targetUrl: 1,
          }
        );

        var urls = [];

        // Extract all 'targetUrl' from webhook objects
        _.forEach(webhooks, (webhook) => urls.push(webhook.targetUrl));

        // Hit all urls using a promise pool with concurrency of 10
        const { results, errors } = await PromisePool.withConcurrency(10)
          .for(urls)
          .process(async (url) => {
            // Execute fetch request for every url
            const response = await fetch(url, {
              method: 'POST',

              // Insert 'ipAddress' and 'UNIX timestamp' in body
              body: JSON.stringify({
                ipAddress,
                timestamp: moment().format(),
              }),

              headers: { 'Content-Type': 'application/json' },
            });

            return response;
          });

        // Return count of success and failed requests
        return { success: results.length, fail: errors.length };
      },
    },
  },
};
