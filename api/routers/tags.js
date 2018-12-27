import Router from 'koa-router';

const { bearer, jwt } = AuthPolicies;
const router = new Router({ prefix: '/v1/tags' });

router.get('/', bearer, jwt, TagController.get);

module.exports = router;
