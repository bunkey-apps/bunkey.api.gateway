/* eslint global-require:0*/
import R from 'ramda';

class AuthController {

  async signIn({ request, response }) {
    require('../models/Token');
    const { body } = request;
    const result = await UserService.signIn(body);
    const token = cano.app.config.redis.nohm.factory('Token');
    token.p(result.body);
    await TokenService.save(token);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async signUp({ request, response }) {
    const { body } = request;
    body.role = 'operator';
    cano.log.debug('signUp -> body', body);
    const result = await UserService.signUp(body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async refreshToken(ctx) {
    const { body } = ctx.request;
    const isRefreshTokenValid = await TokenService.exist({ refreshToken: body.refreshToken });
    if (isRefreshTokenValid) {
      const { accessToken } = await TokenService.findOne({ refreshToken: body.refreshToken });
      if (await JWTService.isTokenExpired(accessToken)) {
        const result = await UserService.refreshToken(body);
        await TokenService.findAndUpdate({ refreshToken: body.refreshToken }, { accessToken: result.body.accessToken });
        ctx.status = result.statusCode;
        ctx.body = result.body;
      } else {
        ctx.status = 200;
        ctx.body = { accessToken };
      }
    } else {
      throw new AuthorizationError('InvalidRefreshToken', `Refresh token ${body.refreshToken} not found in redis DB`);
    }
  }

  async signOut(ctx) {
    const { request: { headers }, state: { user } } = ctx;
    const [, accessToken] = headers.authorization.split(' ');
    const { refreshToken } = await TokenService.findOne({ accessToken });
    const result = await UserService.signOut(R.merge({ refreshToken }, user));
    await TokenService.findAndRemove({ refreshToken });
    ctx.status = result.statusCode;
    ctx.body = result.body;
  }

  async recoveryPassword({ request: { body }, response }) {
    const result = await UserService.recoveryPassword(body);
    response.status = result.statusCode;
  }

}

module.exports = AuthController;
