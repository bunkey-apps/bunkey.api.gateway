/* eslint global-require:0*/
import R from 'ramda';

// const { UserService } = cano.app.services;
// const { TokenService } = cano.app.services;

class AuthController {

  async signIn({ request, response }) {
    const Token = require('../models/Token');
    const { body } = request;
    const result = await UserService.login(body);
    const token = cano.app.config.redis.nohm.factory('Token');
    token.p(result.body);
    await TokenService.save(token);
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
    const [scheme, accessToken] = headers.authorization.split(' ');
    const { refreshToken } = await TokenService.findOne({ accessToken });
    const result = await UserService.logout(R.merge({ refreshToken }, user));
    await TokenService.findAndRemove({ refreshToken });
    ctx.status = result.statusCode;
    ctx.body = result.body;
  }

  async recoveryPassword({ request, response }) {
    const { body } = request;
    const result = await UserService.recoveryPassword(body);
    response.status = result.status;
    response.body = result.body;
  }

  async updatePassword({ request, response }) {
    const { body } = request;
    const result = await UserService.updatePassword(body);
    response.status = result.status;
    response.body = result.body;
  }

}

module.exports = AuthController;
