/* eslint-disable no-underscore-dangle */
class ObjectController {

  async create({ request, params: { id, object }, response }) {
    const result = await ObjectService.create(id, object, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async get({ query, params: { id }, response }) {
    const result = await ObjectService.get(id, query);
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

  async getFavorites({ params: { client }, state: { user }, response }) {
    const result = await ObjectService.getFavorites(user._id, client);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async addObjectToFavorites({ request: { body }, params: { client, object }, state: { user }, response }) {
    const result = await ObjectService.addObjectToFavorites(user._id, client, object, body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async updateWorkspaceToFavorites({ request: { body }, params: { client, object }, state: { user }, response }) {
    const result = await ObjectService.updateWorkspaceToFavorites(user._id, client, object, body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteObjectToFavorites({ request: { body }, params: { client, object }, state: { user }, response }) {
    const result = await ObjectService.deleteObjectToFavorites(user._id, client, object, body);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = ObjectController;
