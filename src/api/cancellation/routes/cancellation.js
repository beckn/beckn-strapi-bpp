'use strict';

/**
 * cancellation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cancellation.cancellation');
