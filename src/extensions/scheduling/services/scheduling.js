module.exports = {
  async customServiceMethod(params) {
    // Business logic here
    return strapi.entityService.findMany("api::scheduling.scheduling", params);
  },
};
