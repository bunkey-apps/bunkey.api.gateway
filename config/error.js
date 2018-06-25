/* eslint no-use-before-define:0*/
module.exports = () => async(ctx, next) => {
  try {
    await next();
  } catch (err) {
    const error = CanoError.handler(err);
    cano.log.error('-->', error.fullContent);
    ctx.status = error.status;
    ctx.body = error.content;
  }
};
