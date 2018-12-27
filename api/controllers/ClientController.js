
class ClientController {

  async create({ request, response }) {
    const result = await ClientService.create(request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await ClientService.get(request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }
  
  async getById({ request, params, response }) {
    const result = await ClientService.getById(params.id, request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getContracts({ request, params, response }) {
    const result = await ClientService.getContracts(params.id, request.query);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getUsers({ request, params: { id: clientOwner }, response }) {
    const result = await UserService.get({ ...request.query, clientOwner });
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateById({ params, request, response }) {
    const result = await ClientService.updateById(params.id, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await ClientService.deleteById(params.id);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = ClientController;
