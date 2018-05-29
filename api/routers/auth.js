import Router from 'koa-router';
const router = new Router({ prefix: '/v1/auth' });
const { AuthController } = cano.app.controllers;
const { AuthPolice } = cano.app.policies;

router.post('/sign-in', AuthController.signIn);
router.post('/sign-out', AuthPolice.jwt, AuthController.signOut);
router.post('/refresh-token', AuthController.refreshToken);

module.exports = router
