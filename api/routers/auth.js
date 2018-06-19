import Router from 'koa-router';
const router = new Router({ prefix: '/v1/auth' });
const { AuthController } = cano.app.controllers;
const { AuthPolice: { bearer, jwt } } = cano.app.policies;

router.post('/sign-in', AuthController.signIn);
router.post('/refresh-token', AuthController.refreshToken);
router.post('/sign-out', bearer, jwt, AuthController.signOut);

module.exports = router
