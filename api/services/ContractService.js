import queryString from 'query-string';

const baseUrl = process.env.ADMIN_SERVICE_URL;
const headers = {
  apikey: process.env.ADMIN_APIKEY,
};

class ContractService {

  async create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.post('/contracts', body, { headers });
    return response;
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/contracts?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async getById(id, query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/contracts/${id}?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/contracts/${id}`, body, { headers });
    return response;
  }

  async deleteById(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/contracts/${id}`, {}, { headers });
    return response;
  }

}

module.exports = ContractService;