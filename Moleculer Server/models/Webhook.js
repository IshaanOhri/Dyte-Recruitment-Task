/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-17 12:58:08
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 13:23:51
 * @Description: MongoDB model for Webhooks
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebhookSchema = new Schema(
  {
    targetUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Webhook', WebhookSchema);
