'use strict';

/**
 * cancel-term service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cancel-term.cancel-term');
