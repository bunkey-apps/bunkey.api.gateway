const { UserService } = cano.app.services;
const { TokenService } = cano.app.services;
import R from 'ramda';

class AuthController {

  async signIn({ request, response }) {
    const Token = require('../models/Token');
    const { body } = request;
    const result = await UserService.login(body);
    const token = await cano.app.config.redis.nohm.factory('Token');
    token.p(result.body);
    await TokenService.save(token);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async refreshToken(ctx) {
    const { body } = ctx.request;
    const result = await UserService.refreshToken(body);
    await TokenService.findAndUpdate({ refreshToken: body.refreshToken }, { accessToken: result.body.accessToken });
    ctx.status = result.statusCode;
    ctx.body = result.body;
  }

  async signOut(ctx) {
    const { request: { body }, state: { user } } = ctx;
    const result = await UserService.logout(R.merge(body, user));
    await TokenService.findAndRemove({ refreshToken: body.refreshToken });
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
