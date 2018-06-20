import RequestPromise from 'request-promise-native';

const defaultOptions = {
  resolveWithFullResponse: true,
  json: true,
};

module.exports = class RequestService {
  create(baseUrl) {
    return new RequestWrapper(baseUrl);
  }
}

class RequestWrapper {

  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  get(resource, opts = {}) {
    const method = 'get';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { uri, method });
    return RequestPromise(options);
  }

  post(resource, body = {}, opts = {}) {
    const method = 'post';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
    console.log(options);
    return RequestPromise(options);
  }

  put(resource, body = {}, opts = {}) {
    const method = 'put';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
    return RequestPromise(options);
  }

  delete(resource, body = {}, opts = {}) {
    const method = 'delete';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
    return RequestPromise(options);
  }

}
