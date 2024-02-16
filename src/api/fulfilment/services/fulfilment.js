'use strict';

/**
 * fulfilment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fulfilment.fulfilment');
