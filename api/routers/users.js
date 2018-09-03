import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/users' });
const roles = role(['admin', 'editor', 'client']);

router
    .post('/', bearer, jwt, roles, UserController.create)
    .get('/', bearer, jwt, roles, UserController.get)
    .get('/:id', bearer, jwt, roles, UserController.getById)
    .put('/:id', bearer, jwt, roles, UserController.updateById)
    .delete('/:id', bearer, jwt, roles, UserController.deleteById);

module.exports = router;
