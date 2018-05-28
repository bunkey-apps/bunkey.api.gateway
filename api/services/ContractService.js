const baseUrl = process.env.ADMIN_SERVICE_URL
const headers = {
  Authorization: `Bearer ${process.env.ADMIN_SERVICE_ACCESS_TOKEN}`,
}

class ContractService {

  async create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/contracts', body, { headers });
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/contracts?${query}`, { headers });
  }

  async getById(id, query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/contracts/${id}?${query}`, { headers });
  }

  async updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.put(`/contracts/${id}`, body, { headers });
  }

  async deleteById(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.delete(`/contracts/${id}`, body, { headers });
  }

}

module.exports = ContractService;