import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/users' });
const roles = role(['admin', 'editor', 'client']);
const isOperator = role('operator');

router
    .post('/', UserController.create)
    .get('/', bearer, jwt, roles, UserController.get)
    .get('/me', bearer, jwt, UserController.getMe)
    .get('/:id', bearer, jwt, roles, UserController.getById)
    .put('/me', bearer, jwt, UserController.updateMe)
    .put('/:id', bearer, jwt, roles, UserController.updateById)
    .delete('/me/work-clients/:client', bearer, jwt, isOperator, UserController.removeWorkClient)

    .get('/me/clients/:client/shared', bearer, jwt, ObjectController.getShared)
    .get('/me/clients/:client/recent', bearer, jwt, ObjectController.getRecent)
    .get('/me/clients/:client/favorites', bearer, jwt, ObjectController.getFavorites)
    .post('/me/clients/:client/favorites/:object', bearer, jwt, ObjectController.addObjectToFavorites)
    .put('/me/clients/:client/favorites/:object', bearer, jwt, ObjectController.updateWorkspaceToFavorites)
    .delete('/me/clients/:client/favorites/:object', bearer, jwt, ObjectController.deleteObjectToFavorites)
    
    .delete('/:id/work-clients/:client', bearer, jwt, roles, UserController.removeWorkClient)
    .delete('/:id', bearer, jwt, roles, UserController.deleteById);

module.exports = router;
