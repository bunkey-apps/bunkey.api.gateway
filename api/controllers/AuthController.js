const { UserService } = cano.app.services;

class AuthController {

  async signIn({ request, response }) {
    const { body } = request;
    const result = await UserService.login(body);
    response.status = result.status;
    response.body = result.body;
  }

  async signOut({ request, response }) {
    response.status = 200;
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
