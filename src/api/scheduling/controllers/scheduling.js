"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { v4: uuidv4 } = require("uuid"); // Import the UUID function

module.exports = createCoreController(
  "api::scheduling.scheduling",
  ({ strapi }) => ({
    async customEndpoint(ctx) {
      ctx.send({ message: "Custom endpoint working!" });
    },

    async insert(ctx) {
      try {
        const { schedule_name, site_code, start_time, total_hours } =
          ctx.request.body;

        if (!schedule_name || !start_time) {
          return ctx.badRequest(
            "Schedule name and Start time are required fields."
          );
        }

        const uuid = uuidv4();

        const newSchedule = await strapi.entityService.create(
          "api::scheduling.scheduling",
          {
            data: {
              uuid,
              schedule_name,
              site_code,
              start_time,
              total_hours,
            },
          }
        );

        ctx.send(newSchedule);
      } catch (err) {
        ctx.badRequest("Error inserting data", { error: err });
      }
    },

    async getAll(ctx) {
      try {
        // Fetch all entries where isDeleted is false
        const schedules = await strapi.entityService.findMany(
          "api::scheduling.scheduling",
          {
            filters: {
              isDeleted: false,
            },
          }
        );

        ctx.send(schedules);
      } catch (err) {
        ctx.badRequest("Error retrieving data", { error: err });
      }
    },

    async update(ctx) {
      try {
        const { id } = ctx.params; // Get the ID from the URL parameter
        const { schedule_name, site_code, start_time, total_hours } =
          ctx.request.body;

        if (!schedule_name || !start_time) {
          return ctx.badRequest(
            "Schedule name and Start time are required fields."
          );
        }

        // Update the entry with the specified ID
        const updatedSchedule = await strapi.entityService.update(
          "api::scheduling.scheduling",
          id,
          {
            data: {
              schedule_name,
              site_code,
              start_time,
              total_hours,
            },
          }
        );

        ctx.send(updatedSchedule);
      } catch (err) {
        ctx.badRequest("Error updating data", { error: err });
      }
    },

    async delete(ctx) {
      try {
        const { id } = ctx.params; // Get the ID from the URL parameter

        // Soft delete by updating the `isDeleted` field
        const updatedSchedule = await strapi.entityService.update(
          "api::scheduling.scheduling",
          id,
          {
            data: {
              isDeleted: true,
            },
          }
        );

        ctx.send(updatedSchedule);
      } catch (err) {
        ctx.badRequest("Error updating data", { error: err });
      }
    },
  })
);
