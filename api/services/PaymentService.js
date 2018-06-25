import queryString from 'query-string';

const baseUrl = process.env.ADMIN_SERVICE_URL;
const headers = {
  apikey: process.env.ADMIN_APIKEY,
};

class PaymentService {

  async create(contract, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.post(`/contracts/${contract}/payments`, body, { headers });
    return response;
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/payments?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async updateById(contract, id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/contracts/${contract}/payments/${id}`, body, { headers });
    return response;
  }

  async deleteById(contract, id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/contracts/${contract}/payments/${id}`, {}, { headers });
    return response;
  }

}

module.exports = PaymentService;