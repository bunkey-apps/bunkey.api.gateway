/* eslint global-require:0*/
class SharedController {
    async create({ request: { body }, response }) {
        const result = await SharedService.create(body);
        response.status = result.statusCode;
        response.body = result.body;
    }

    async validate({ request: { body }, response }) {
        require('../models/Token');
        const result = await SharedService.validate(body);
        response.status = result.statusCode;
        response.body = result.body;
    }
}

module.exports = SharedController;
