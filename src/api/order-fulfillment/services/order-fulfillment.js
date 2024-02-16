'use strict';

/**
 * order-fulfillment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-fulfillment.order-fulfillment');
