module.exports = {
  routes: [
    {
      method: "GET",
      path: "/scheduling/custom-endpoint",
      handler: "scheduling.customEndpoint",
      config: {
        auth: false,
      },
    },
  ],
};
