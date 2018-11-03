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

  async getById(client, object) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/objects/${object}`, { headers });
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

  async getWorkspace(user, client) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${user}/clients/${client}/workspaces`, { headers });
    return response;
  }

  async addObjectToWorkspace(user, client, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/users/${user}/clients/${client}/workspaces/objects`, body, { headers });
    return response;
  }

  async deleteObjectToWorkspace(user, client, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/users/${user}/clients/${client}/workspaces/objects`, body, { headers });
    return response;
  }

}

module.exports = ObjectService;
