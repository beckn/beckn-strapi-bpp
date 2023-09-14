'use strict';

/**
 * service-availability service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-availability.service-availability');
