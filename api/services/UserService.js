import queryString from 'query-string';

const baseUrl = process.env.USER_SERVICE_URL || 'http://localhost:20145'
const headers = {
  Authorization: `Bearer ${process.env.USER_SERVICE_ACCESS_TOKEN}`,
}

class UserService {

  login(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.post('/auth', body, { headers });
  }

  refreshToken(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.post('/auth/refresh-token', body, { headers });
  }

  logout(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.post('/auth/logout', body, { headers });
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

  create(body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.post('/users', body, { headers });
  }

  get(query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.get(`/users?${queryString.stringify(query)}`, { headers });
  }

  getById(id, query) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.get(`/users/${id}?${queryString.stringify(query)}`, { headers });
  }

  updateById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.put(`/users/${id}`, body, { headers });
  }

  deleteById(id, body) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    return request.delete(`/users/${id}`, body, { headers });
  }

}

module.exports = UserService;
