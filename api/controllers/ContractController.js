const { ContractService } = cano.app.services;

class ContractController {

  async create({ request, response }) {
    const result = await ContractService.create(request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await ContractService.get(request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getById({ request, params, response }) {
    const result = await ContractService.getById(params.id, request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateById({ params, request, response }) {
    const result = await ContractService.updateById(params.id, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await ContractService.deleteById(params.id);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = ContractController;
