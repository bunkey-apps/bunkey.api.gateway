import Router from 'koa-router';
const router = new Router({ prefix: '/v1/auth' });
const { AuthController } = cano.app.controllers;

router.post('/', AuthController.login);
router.post('/refresh-token', AuthController.refreshToken);

module.exports = router
