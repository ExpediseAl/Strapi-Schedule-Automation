module.exports = {
  async customEndpoint(ctx) {
    // Custom logic here
    ctx.send({ message: "Hello from the custom endpoint!" });
  },
};
