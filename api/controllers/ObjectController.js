/* eslint-disable no-underscore-dangle */
class ObjectController {

  async create({ request, params: { id, object }, response }) {
    const result = await ObjectService.create(id, object, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }
  
  async getById({ params: { id, object }, response }) {
    const result = await ObjectService.getById(id, object);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getUrlSignature({ request: { body }, response }) {
    const result = await ObjectService.getUrlSignature(body);
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

  async getWorkspace({ params: { client }, state: { user }, response }) {
    const result = await ObjectService.getWorkspace(user._id, client);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async addObjectToWorkspace({ request: { body }, params: { client }, state: { user }, response }) {
    const result = await ObjectService.addObjectToWorkspace(user._id, client, body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteObjectToWorkspace({ request: { body }, params: { client }, state: { user }, response }) {
    const result = await ObjectService.deleteObjectToWorkspace(user._id, client, body);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = ObjectController;
