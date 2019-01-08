/* eslint-disable no-underscore-dangle */
class UserController {
  async create({ request, response }) {
    const result = await UserService.create(request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await UserService.get(request.query);
    response.status = 200;
    response.set('X-Pagination-Total-Count', result.headers['x-pagination-total-count']);
    response.set('X-Pagination-Limit', result.headers['x-pagination-limit']);
    response.body = result.body;
  }

  async getById({ request, params, response }) {
    const result = await UserService.getById(params.id, request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateById(ctx) {
    const { params, request } = ctx;
    const result = await UserService.updateById(params.id, request.body);
    ctx.status = result.statusCode;
    ctx.body = result.body;
  }
  
  async removeWorkClient({ params, state, response }) {
    const { client, id } = params;
    const { user: { _id } } = state;
    const result = await UserService.removeWorkClient(id || _id, client);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await UserService.deleteById(params.id);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getMe({ state: { user }, response }) {
    const result = await UserService.getById(user._id);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateMe({ request: { body }, state: { user }, response }) {
    const result = await UserService.updateById(user._id, { ...body, role: user.role });
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = UserController;
