const { PaymentService } = cano.app.services;

class PaymentController {

  async create({ request, response }) {
    const result = await PaymentService.create(request.body);
    response.status = result.status;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await PaymentService.get(request.query);
    response.status = result.status;
    response.body = result.body;
  }

  async getById({ request, params, response }) {
    const result = await PaymentService.getById(params.id, request.query);
    response.status = result.status;
    response.body = result.body;
  }

  async updateById({ params, request, response }) {
    const result = await PaymentService.updateById(params.id, request.body);
    response.status = result.status;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await PaymentService.deleteById(params.id);
    response.status = result.status;
    response.body = result.body;
  }

}

module.exports = PaymentController;
