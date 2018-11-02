/* eslint global-require:0*/
class InvitationController {
    async create({ request: { body }, response }) {
        const result = await InvitationService.create(body);
        response.status = result.statusCode;
        response.body = result.body;
    }

    async validate({ request: { body }, response }) {
        require('../models/Token');
        const result = await InvitationService.validate(body);
        const { accessToken } = result.body;
        const token = cano.app.config.redis.nohm.factory('Token');
        token.p({ accessToken, refreshToken: 'void' });
        await TokenService.save(token);
        response.status = result.statusCode;
        response.body = result.body;
    }

    async answer({ request: { body }, state: { accessToken }, response }) {
        body.accessToken = accessToken;
        const result = await InvitationService.answer(body);
        response.status = result.statusCode;
        response.body = result.body;
    }
}

module.exports = InvitationController;
