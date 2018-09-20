class ObjectController {

  async create({ request, params: { id, object }, response }) { //client, object,
    const result = await ObjectService.create(id, object, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }
  
  async getById({ params: { id, object }, response }) {
    const result = await ObjectService.getById(id, object);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateById({ params: { id, object }, request, response }) {
    const result = await ObjectService.updateById(id, object, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteById({ params: { id, object }, response }) {
    const result = await ObjectService.deleteById(id, object);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = ObjectController;
