const baseUrl = process.env.ADMIN_SERVICE_URL
const headers = {
  Authorization: `Bearer ${process.env.ADMIN_SERVICE_ACCESS_TOKEN}`,
}

class ClientService {

  async create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/clients', body, { headers });
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/clients?${query}`, { headers });
  }

  async getById(id, query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/clients/${id}?${query}`, { headers });
  }

  async updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.put(`/clients/${id}`, body, { headers });
  }

  async deleteById(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.delete(`/clients/${id}`, body, { headers });
  }

}

module.exports = ClientService;