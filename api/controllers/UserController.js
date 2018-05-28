const { UserService } = cano.app.services;

class UserController {

  async create({ request, response }) {
    const result = await UserService.create(request.body);
    response.status = result.status;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await UserService.get(request.query);
    response.status = result.status;
    response.body = result.body;
  }

  async getById({ request, params, response }) {
    const result = await UserService.getById(params.id, request.query);
    response.status = result.status;
    response.body = result.body;
  }

  async updateById({ params, request, response }) {
    const result = await UserService.updateById(params.id, request.body);
    response.status = result.status;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await UserService.deleteById(params.id);
    response.status = result.status;
    response.body = result.body;
  }

}

module.exports = UserController;
