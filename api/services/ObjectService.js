/* eslint-disable no-underscore-dangle */
import queryString from 'query-string';

const baseUrl = process.env.OBJECT_SERVICE_URL;
const headers = {
  apikey: process.env.OBJECT_APIKEY,
};

class ObjectService {
  async create(client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.post(`/clients/${client}/objects/${object}`, body, { headers });
    return response;
  }
  
  async getUrlSignature(data) {
    const request = RequestService.create(baseUrl);
    const response = await request.post('/url-signature', data, { headers });
    return response;
  }

  async get(client, query) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/objects?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async getById(client, object, query) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/objects/${object}?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async getWorkspacesByClient(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${id}/workspaces`, { headers });
    return response;
  }

  async getWorkspacesByUser(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${id}/workspaces`, { headers });
    return response;
  }
  
  async update(client, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/clients/${client}/objects`, body, { headers });
    return response;
  }

  async updateById(client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/clients/${client}/objects/${object}`, body, { headers });
    return response;
  }

  async deleteById(client, object) {
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/clients/${client}/objects/${object}`, {}, { headers });
    return response;
  }

  // Shared
  
  async getShared(user, client) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${user}/clients/${client}/shared`, { headers });
    return response;
  }

  // Recent
  
  async getRecent(user, client) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${user}/clients/${client}/recent`, { headers });
    return response;
  }

  // Favorites

  async getFavorites(user, client) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${user}/clients/${client}/favorites`, { headers });
    return response;
  }

  async addObjectToFavorites(user, client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.post(`/users/${user}/clients/${client}/favorites/${object}`, body, { headers });
    return response;
  }

  async updateWorkspaceToFavorites(user, client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/users/${user}/clients/${client}/favorites/${object}`, body, { headers });
    return response;
  }

  async deleteObjectToFavorites(user, client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/users/${user}/clients/${client}/favorites/${object}`, body, { headers });
    return response;
  }

}

module.exports = ObjectService;
