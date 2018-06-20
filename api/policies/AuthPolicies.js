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
      throw new AuthorizationError('InsufficientPrivileges', 'You don\'t have enough privileges to do this action');
    };
  }

  async bearer(ctx, next) {
    const cb = async (err) => {
      if (err) {
        if (err.message === 'Invalid Token') {
          throw new AuthorizationError('InvalidAccessToken', 'Token doesnt exist in redis DB');
        }
        throw err;
      } else {
        await next();
      }
    };
    return cano.passport.authenticate('bearer', cb)(ctx, next);
  }

  async jwt(ctx, next) {
    const cb = async (err, user, info) => {
      if (info && info.name === 'TokenExpiredError') {
        throw new AuthorizationError('InvalidAccessToken', 'The Authentication token has expired');
      }
      if (info && info.name === 'JsonWebTokenError') {
        throw new AuthorizationError('InvalidAccessToken', 'The Authentication token is invalid or was vulnerated');
      }
      if (info) {
        throw new AuthorizationError('InvalidAccessToken', 'Invalid token, Format is Authorization: Bearer [token]');
      }
      if (err) {
        throw err;
      }
      ctx.state.user = user;
      await next();
    };
    return cano.passport.authenticate('jwt', cb)(ctx, next);
  }

}

module.exports = AuthPolicies;
