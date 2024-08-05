"use strict";

/**
 * scheduling service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::scheduling.scheduling");
