'use strict';

/**
 * cancellation-term service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cancellation-term.cancellation-term');
