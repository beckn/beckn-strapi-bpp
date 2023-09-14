'use strict';

/**
 * cancellation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cancellation.cancellation');
