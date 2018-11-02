import Router from 'koa-router';

const router = new Router({ prefix: '/v1/auth' });
const { bearer, jwt, role } = AuthPolicies;
const isInvited = role('invited');

router.post('/sign-in', AuthController.signIn);
router.post('/sign-up', bearer, jwt, isInvited, AuthController.signUp);
router.post('/refresh-token', AuthController.refreshToken);
router.post('/sign-out', bearer, jwt, AuthController.signOut);

module.exports = router;
