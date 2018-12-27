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

  async getById({ state: { user }, params: { id, object }, response }) {
    const result = await ObjectService.getById(id, object, user);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getWorkspacesByClient({ params, response }) {
    const result = await ObjectService.getWorkspacesByClient(params.id);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getWorkspacesByUser({ state, response }) {
    const { user: { _id } } = state;
    const result = await ObjectService.getWorkspacesByUser(_id);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getUrlSignature({ request: { body }, response }) {
    const result = await ObjectService.getUrlSignature(body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async update({ request, params: { id }, response }) {
    const result = await ObjectService.update(id, request.body);
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

  async getShared({ params: { client }, state: { user }, response }) {
    const result = await ObjectService.getShared(user._id, client);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async getRecent({ params: { client }, state: { user }, response }) {
    const result = await ObjectService.getRecent(user._id, client);
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
