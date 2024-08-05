module.exports = async (ctx, next) => {
  const { user } = ctx.state;
  const { id } = ctx.params;

  const scheduling = await strapi.entityService.findOne(
    "api::scheduling.scheduling",
    id
  );
  // @ts-ignore
  if (scheduling.owner !== user.id) {
    return ctx.unauthorized("You are not the owner of this article.");
  }

  await next();
};
