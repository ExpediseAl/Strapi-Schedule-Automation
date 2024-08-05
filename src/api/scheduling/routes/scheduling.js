"use strict";

/**
 * scheduling router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/scheduling/custom-endpoint",
      handler: "scheduling.customEndpoint",
      config: {
        auth: false, // Set to true if authentication is required
      },
    },
    {
      method: "GET",
      path: "/scheduling/get-all",
      handler: "scheduling.getAll",
      config: {
        auth: false, // Set to true if authentication is required
      },
    },
    {
      method: "POST",
      path: "/scheduling/insert",
      handler: "scheduling.insert",
      config: {
        auth: false, // Set to true if authentication is required
      },
    },
    {
      method: "PUT", // HTTP method for update
      path: "/scheduling/update/:id", // Route with an ID parameter
      handler: "scheduling.update", // Handler function in the controller
      config: {
        auth: false, // Set to true if authentication is required
      },
    },
    {
      method: "DELETE", // Correct HTTP method for delete
      path: "/scheduling/delete/:id", // Route with an ID parameter
      handler: "scheduling.delete", // Handler function in the controller
      config: {
        auth: false, // Set to true if authentication is required
      },
    },
  ],
};
