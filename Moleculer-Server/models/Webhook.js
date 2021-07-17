/*
 * @Author: Ishaan Ohri
 * @Date: 2021-07-17 12:58:08
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-07-17 14:37:34
 * @Description: MongoDB model for Webhooks
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebhookSchema = new Schema(
  {
    targetUrl: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Webhook', WebhookSchema);
