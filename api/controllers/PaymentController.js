const { PaymentService } = cano.app.services;

class PaymentController {

  async create({ request, params, response }) {
    const { contract } = params;
    const result = await PaymentService.create(contract, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getByContractId({ request, params, response }) {
    const { contract } = params;
    const result = await PaymentService.get({ contract, ...request.query });
    response.status = result.statusCode;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await PaymentService.get(request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateById({ params, request, response }) {
    const { contract, id } = params;
    const result = await PaymentService.updateById(contract, id, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const { contract, id } = params;
    const result = await PaymentService.deleteById(contract, id);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = PaymentController;
