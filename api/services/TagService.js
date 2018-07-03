import queryString from 'query-string';

const baseUrl = process.env.ADMIN_SERVICE_URL;
const headers = {
  apikey: process.env.ADMIN_APIKEY,
};

class TagService {

  async create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.post('/tags', body, { headers });
    return response;
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/tags?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/tags/${id}`, body, { headers });
    return response;
  }

  async deleteById(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/tags/${id}`, {}, { headers });
    return response;
  }

}

module.exports = TagService;