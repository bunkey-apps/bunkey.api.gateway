import Router from 'koa-router';
const router = new Router({ prefix: '/v1/auth' });
const { AuthController } = cano.app.controllers;
const { AuthPolice: { bearer, jwt } } = cano.app.policies;

router.post('/', AuthController.login);
router.post('/refresh-token', AuthController.refreshToken);
router.post('/logout', bearer, jwt, AuthController.logout);

module.exports = router
