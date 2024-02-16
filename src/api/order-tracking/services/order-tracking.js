'use strict';

/**
 * order-tracking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-tracking.order-tracking');
