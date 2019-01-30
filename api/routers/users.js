import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/users' });
const roles = role(['admin', 'editor', 'client', 'operator']);
const isOperator = role('operator');

router
    .get('/', bearer, jwt, roles, UserController.get)
    .get('/me', bearer, jwt, UserController.getMe)
    .get('/:id', bearer, jwt, roles, UserController.getById)
    .put('/me', bearer, jwt, UserController.updateMe)
    .put('/:id', bearer, jwt, roles, UserController.updateById)
    .get('/me/workspaces', bearer, jwt, ObjectController.getWorkspacesByUser)
    .get('/me/workspaces/:client', bearer, jwt, ObjectController.getWorkspace)
    .delete('/me/workspaces/:client', bearer, jwt, isOperator, UserController.removeWorkClient)

    .get('/me/clients/:client/shared', bearer, jwt, ObjectController.getShared)
    .get('/me/clients/:client/recent', bearer, jwt, ObjectController.getRecent)
    .get('/me/clients/:client/favorites', bearer, jwt, ObjectController.getFavorites)
    .post('/me/clients/:client/favorites/:object', bearer, jwt, ObjectController.addObjectToFavorites)
    .put('/me/clients/:client/favorites/:object', bearer, jwt, ObjectController.updateWorkspaceToFavorites)
    .delete('/me/clients/:client/favorites/:object', bearer, jwt, ObjectController.deleteObjectToFavorites)
    
    .put('/:id/workspaces/:client', bearer, jwt, roles, UserController.updateWorkClient)
    .delete('/:id/workspaces/:client', bearer, jwt, roles, UserController.removeWorkClient)
    .delete('/:id', bearer, jwt, roles, UserController.deleteById);

module.exports = router;
