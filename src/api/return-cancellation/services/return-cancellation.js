'use strict';

/**
 * return-cancellation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::return-cancellation.return-cancellation');
