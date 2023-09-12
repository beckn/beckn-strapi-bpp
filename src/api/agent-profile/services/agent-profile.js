'use strict';

/**
 * agent-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agent-profile.agent-profile');
