'use strict';

/**
 * cancellation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cancellation.cancellation');
