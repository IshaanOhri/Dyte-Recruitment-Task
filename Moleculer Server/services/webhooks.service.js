/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-17 13:41:49
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 14:16:05
 * @Description: Moleculer schema for Webhook service
 */

const DbService = require('moleculer-db');
const MongooseAdapter = require('moleculer-db-adapter-mongoose');
const Webhook = require('../models/Webhook');
const { MoleculerError } = require('moleculer').Errors;
const { message, status } = require('../config/response');

module.exports = {
  name: 'webhooks',
  mixins: [DbService],
  adapter: new MongooseAdapter('mongodb://root:rootpassword@localhost:27017'),
  model: Webhook,
  collection: 'webhooks',
  settings: {
    fields: ['_id', 'targetUrl'],
    entityValidator: {
      targetUrl: 'string',
    },
  },
  actions: {
    register: {
      rest: {
        method: 'POST',
        path: '/register',
      },
      params: {
        targetUrl: 'string',
      },
      async handler(ctx) {
        const webhook = await this.adapter.insert(ctx.params);

        return { id: webhook._id };
      },
    },
    update: {
      rest: {
        method: 'PATCH',
        path: '/update',
      },
      params: {
        id: 'string',
        newTargetUrl: 'string',
      },
      async handler(ctx) {
        const { id, newTargetUrl } = ctx.params;

        const webhook = await this.adapter.findById(id);

        if (!webhook) {
          throw new MoleculerError(message.webhookNotFound, status.notFound);
        }

        webhook.targetUrl = newTargetUrl;

        await webhook.save();
        return webhook;
      },
    },
    delete: {
      rest: {
        method: 'DELETE',
        path: '/delete',
      },
      params: {
        id: 'string',
      },
      async handler(ctx) {
        const { id } = ctx.params;

        const webhook = await this.adapter.removeById(id);
        return webhook;
      },
    },
    trigger: {
      rest: {
        method: 'POST',
        path: '/trigger',
      },
      params: {
        ipAddress: 'string',
      },
      async handler(ctx) {
        const { ipAddress } = ctx.params;
      },
    },
  },
};
