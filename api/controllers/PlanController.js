const { PlanService } = cano.app.services;

class PlanController {

  async create({ request, response }) {
    const result = await PlanService.create(request.body);
    response.status = result.status;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await PlanService.get(request.query);
    response.status = result.status;
    response.body = result.body;
  }

  async getById({ request, params, response }) {
    const result = await PlanService.getById(params.id, request.query);
    response.status = result.status;
    response.body = result.body;
  }

  async updateById({ params, request, response }) {
    const result = await PlanService.updateById(params.id, request.body);
    response.status = result.status;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await PlanService.deleteById(params.id);
    response.status = result.status;
    response.body = result.body;
  }

}

module.exports = PlanController;
