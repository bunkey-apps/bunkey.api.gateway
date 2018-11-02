import queryString from 'query-string';

const baseUrl = process.env.USER_SERVICE_URL;
const headers = {
  apikey: `${process.env.USER_SERVICE_API_KEY}`,
};

class UserService {

  signIn(body) {
    const request = RequestService.create(baseUrl);
    return request.post('/auth', body, { headers });
  }

  refreshToken(body) {
    const request = RequestService.create(baseUrl);
    return request.post('/auth/refresh-token', body, { headers });
  }

  signOut(body) {
    const request = RequestService.create(baseUrl);
    return request.post('/auth/logout', body, { headers });
  }

  signUp(body) {
    const request = RequestService.create(baseUrl);
    return request.post('/users', body, { headers });
  }

  recoveryPassword(body) {
    const request = RequestService.create(baseUrl);
    return request.post('/auth/recovery-password', body, { headers });
  }

  create(body) {
    const request = RequestService.create(baseUrl);
    return request.post('/users', body, { headers });
  }

  get(query) {
    const request = RequestService.create(baseUrl);
    return request.get(`/users?${queryString.stringify(query)}`, { headers });
  }

  getById(id, query) {
    const request = RequestService.create(baseUrl);
    return request.get(`/users/${id}?${queryString.stringify(query)}`, { headers });
  }

  updateById(id, body) {
    const request = RequestService.create(baseUrl);
    return request.put(`/users/${id}`, body, { headers });
  }

  sendInvitation(data) {
    const request = RequestService.create(baseUrl);
    return request.post('/invitations', data, { headers });
  }

  removeWorkClient(id, client) {
    cano.log.debug('removeWorkClient -> id', id, 'client ->', client);
    const request = RequestService.create(baseUrl);
    return request.delete(`/users/${id}/work-clients/${client}`, {}, { headers });
  }

  deleteById(id) {
    const request = RequestService.create(baseUrl);
    return request.delete(`/users/${id}`, {}, { headers });
  }

}

module.exports = UserService;
