module.exports = {
  async pluginEndpoint(ctx) {
    // Logic for the plugin endpoint
    ctx.send({ message: "This is a custom plugin endpoint!" });
  },
};
