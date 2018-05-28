const { UserService } = cano.app.services;

class AuthController {

  async login({ request, response }) {
    const { body } = request;
    const result = await UserService.login(body);
    response.status = result.status;
    response.body = result.body;
  }

  async refreshToken({ request, response }) {
    const { body } = request;
    const result = await UserService.refreshToken(body);
    response.status = result.status;
    response.body = result.body;
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
