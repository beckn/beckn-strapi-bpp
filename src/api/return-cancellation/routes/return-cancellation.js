'use strict';

/**
 * return-cancellation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::return-cancellation.return-cancellation');
