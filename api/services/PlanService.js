const baseUrl = process.env.ADMIN_SERVICE_URL
const headers = {
  Authorization: `Bearer ${process.env.ADMIN_SERVICE_ACCESS_TOKEN}`,
}

class PlanService {

  async create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/plans', body, { headers });
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/plans?${query}`, { headers });
  }

  async getById(id, query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/plans/${id}?${query}`, { headers });
  }

  async updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.put(`/plans/${id}`, body, { headers });
  }

  async deleteById(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.delete(`/plans/${id}`, body, { headers });
  }

}

module.exports = PlanService;