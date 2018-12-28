import Router from 'koa-router';

const { bearer, jwt } = AuthPolicies;
const router = new Router({ prefix: '/v1/shared' });

router
      .post('/', bearer, jwt, SharedController.create)
      .delete('/', bearer, jwt, SharedController.revoke)
      .post('/validate', SharedController.validate);

module.exports = router;
