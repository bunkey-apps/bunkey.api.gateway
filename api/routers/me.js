import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/users/me' });

router
    .get('/', bearer, jwt, UserController.getMe)
    .put('/', bearer, jwt, UserController.updateMe);

module.exports = router;
