import RequestPromise from 'request-promise-native';

const defaultOptions = {
  resolveWithFullResponse: true,
  json: true,
};

function process(error) {
  if (!error.response) return error;
  const { body: { code, description, message }, statusCode: status } = error.response;
  const msg = message || 'An error occurred in RequestService.';
  return new CanoError(msg, { code, description, status });
}

class RequestWrapper {

  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async get(resource, opts = {}) {
    try {
      const method = 'get';
      const uri = this.baseUrl + resource;
      const options = Object.assign({}, defaultOptions, opts, { uri, method });
      const response = await RequestPromise(options);
      return response;
    } catch (error) {
      throw process(error);
    }
  }

  async post(resource, body = {}, opts = {}) {
    try {
      const method = 'post';
      const uri = this.baseUrl + resource;
      const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
      const response = await RequestPromise(options);
      return response;
    } catch (error) {
      throw process(error);
    }
  }

  async put(resource, body = {}, opts = {}) {
    try {
      const method = 'put';
      const uri = this.baseUrl + resource;
      const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
      const response = await RequestPromise(options);
      return response;
    } catch (error) {
      throw process(error);
    }
  }

  async delete(resource, body = {}, opts = {}) {
    try {
      const method = 'delete';
      const uri = this.baseUrl + resource;
      const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
      const response = await RequestPromise(options);
      return response;
    } catch (error) {
      throw process(error);
    }
  }

}

module.exports = class RequestService {
  create(baseUrl) {
    return new RequestWrapper(baseUrl);
  }
}
