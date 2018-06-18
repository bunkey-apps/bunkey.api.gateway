// const { MessageService } = cano.app.services;
class AuthPolicies {

    role(roles) {
        const rolArray = Array.isArray(roles) ? roles : [roles];
        return async (ctx, next) => {
            const { user: { role } } = ctx.state;
            if (rolArray.includes(role)) {
                await next();
                return;
            }
            ctx.status = 403;
            ctx.body = { message: 'You don\'t have enough privileges to do this action' };
        };
    }

    async bearer(ctx, next) {
      const cb = async (err) => {
          if (err) {
              cano.log.error(err);
              if (err.message === 'Invalid Token') {
                  ctx.status = 401;
                  ctx.body = { message: 'Invalid token', code: 'InvalidAccessToken' };
                  return;
              }
              ctx.status = 500;
              ctx.body = err;
          } else {
              await next();
          }
      };
      return cano.passport.authenticate('bearer', cb)(ctx, next);
  }

    async jwt(ctx, next) {
      const cb = async (err, user, info) => {
          if (info && info.name === 'TokenExpiredError') {
              ctx.status = 401;
              ctx.body = {
                  status: 'error',
                  message: 'The Authentication token has expired',
              };
              return;
          }
          if (info && info.name === 'JsonWebTokenError') {
              ctx.status = 401;
              ctx.body = {
                  status: 'error',
                  message: 'The Authentication token is invalid',
              };
              return;
          }
          if (info) {
              ctx.status = 401;
              ctx.body = {
                  status: 'error',
                  message: 'Invalid token, Format is Authorization: Bearer [token]',
              };
              return;
          }
          if (err) {
              ctx.status = 500;
              ctx.body = err;
              return;
          }
          ctx.state.user = user;
          await next();
      };
      return cano.passport.authenticate('jwt', cb)(ctx, next);
  }

}

module.exports = AuthPolicies;
