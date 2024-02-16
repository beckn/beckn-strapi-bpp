'use strict';

/**
 * input service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::input.input');
