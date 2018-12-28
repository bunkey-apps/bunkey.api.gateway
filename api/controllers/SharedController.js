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
        const { accessToken } = result.body;
        const token = cano.app.config.redis.nohm.factory('Token');
        token.p({ accessToken, refreshToken: 'void' });
        await TokenService.save(token);
        response.status = result.statusCode;
        response.body = result.body;
    }
}

module.exports = SharedController;
