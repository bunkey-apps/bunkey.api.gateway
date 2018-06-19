// import R from 'ramda';
const { UserService } = cano.app.services;

class UserController {

  async create({ request, response }) {
      try {
          const result = await UserService.create(request.body);
          response.status = result.statusCode;
          response.body = result.body;
      } catch (e) {
          console.log(e);
      }
  }

  async get({ request, response }) {
    const result = await UserService.get(request.query);
    response.status = 200;
    response.body = result.body;
  }

  async getById({ request, params, response }) {
    const result = await UserService.getById(params.id, request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateById(ctx) {
    const { params, request } = ctx;
    // console.log(R.merge(request.body, user));
    const result = await UserService.updateById(params.id, request.body);
    ctx.status = result.statusCode;
    ctx.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await UserService.deleteById(params.id);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = UserController;
