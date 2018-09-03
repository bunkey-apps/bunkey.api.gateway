import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/users' });
// const isAdmin = role('admin');

router
    .post('/', bearer, jwt, UserController.create)
    .get('/', bearer, jwt, UserController.get)
    .get('/:id', bearer, jwt, UserController.getById)
    .put('/:id', bearer, jwt, UserController.updateById)
    .delete('/:id', bearer, jwt, UserController.deleteById);

module.exports = router;
