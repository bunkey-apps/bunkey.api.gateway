const baseUrl = process.env.USER_SERVICE_URL;
const headers = {
  apikey: `${process.env.USER_SERVICE_API_KEY}`,
};

class InvitationService {
  create(data) {
    const request = RequestService.create(baseUrl);
    return request.post('/invitations', data, { headers });
  }

  validate(data) {
    const request = RequestService.create(baseUrl);
    return request.post('/invitations/validate', data, { headers });
  }

  answer(data) {
    const request = RequestService.create(baseUrl);
    return request.post('/invitations/answer', data, { headers });
  }

}

module.exports = InvitationService;
