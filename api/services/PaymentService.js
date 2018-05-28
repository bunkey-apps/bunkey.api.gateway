const baseUrl = process.env.ADMIN_SERVICE_URL
const headers = {
  Authorization: `Bearer ${process.env.ADMIN_SERVICE_ACCESS_TOKEN}`,
}

class PaymentService {

  async create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/payments', body, { headers });
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/payments?${query}`, { headers });
  }

  async getById(id, query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/payments/${id}?${query}`, { headers });
  }

  async updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.put(`/payments/${id}`, body, { headers });
  }

  async deleteById(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.delete(`/payments/${id}`, body, { headers });
  }

}

module.exports = PaymentService;