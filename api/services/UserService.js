const baseUrl = process.env.USER_SERVICE_URL
const headers = {
  Authorization: `Bearer ${process.env.USER_SERVICE_ACCESS_TOKEN}`,
}

class UserService {

  async login(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/login', body, { headers });
  }

  async refreshToken(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/refresh-token', body, { headers });
  }

  async recoveryPassword(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/recovery-password', body, { headers });
  }

  async updatePassword(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.put('/recovery-password', body, { headers });
  }

  async create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.post('/users', body, { headers });
  }

  async get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/users?${query}`, { headers });
  }

  async getById(id, query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.get(`/users/${id}?${query}`, { headers });
  }

  async updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.put(`/users/${id}`, body, { headers });
  }

  async deleteById(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return await request.delete(`/users/${id}`, body, { headers });
  }

}

module.exports = UserService;