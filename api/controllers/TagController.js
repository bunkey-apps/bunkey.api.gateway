class TagController {

  async create({ request, response }) {
    const result = await TagService.create(request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async get({ request, response }) {
    const result = await TagService.get(request.query);
    response.status = result.statusCode;
    response.set('X-Pagination-Total-Count', result.headers['x-pagination-total-count']);
    response.set('X-Pagination-Limit', result.headers['x-pagination-limit']);
    response.body = result.body;
  }

  async updateById({ params, request, response }) {
    const result = await TagService.updateById(params.id, request.body);
    response.status = result.statusCode;
    response.body = result.body;
  }

  async deleteById({ params, response }) {
    const result = await TagService.deleteById(params.id);
    response.status = result.statusCode;
    response.body = result.body;
  }

}

module.exports = TagController;
