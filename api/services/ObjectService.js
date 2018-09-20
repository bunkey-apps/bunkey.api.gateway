const baseUrl = process.env.OBJECT_SERVICE_URL;
const headers = {
  apikey: process.env.OBJECT_APIKEY,
};

class ObjectService {
  async create(client, object, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.post(`/clients/${client}/objects/${object}`, body, { headers });
    return response;
  }

  async getById(client, object) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/objects/${object}`, { headers });
    return response;
  }

  async updateById(client, object, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/clients/${client}/objects/${object}`, body, { headers });
    return response;
  }

  async deleteById(client, object) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/clients/${client}/objects/${object}`, {}, { headers });
    return response;
  }

}

module.exports = ObjectService;