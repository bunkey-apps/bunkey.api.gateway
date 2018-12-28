const baseUrl = process.env.OBJECT_SERVICE_URL;
const headers = {
  apikey: `${process.env.OBJECT_APIKEY}`,
};

class SharedService {
  create(data) {
    const request = RequestService.create(baseUrl);
    return request.post('/shared', data, { headers });
  }

  revoke(data) {
    const request = RequestService.create(baseUrl);
    return request.delete('/shared', data, { headers });
  }

  validate(data) {
    const request = RequestService.create(baseUrl);
    return request.post('/shared/validate', data, { headers });
  }

}

module.exports = SharedService;
