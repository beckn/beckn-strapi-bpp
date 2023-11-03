'use strict';

/**
 * appointment-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appointment-status.appointment-status');
