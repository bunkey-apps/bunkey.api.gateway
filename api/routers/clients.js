import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/clients' });

const rolesOne = role(['admin', 'editor', 'client']);
const rolesTwo = role(['admin', 'editor']);
const rolesThree = role(['admin', 'editor', 'client', 'operator']);

router
  .get('/:id', bearer, jwt, ClientController.getById)
  .put('/:id', bearer, jwt, rolesOne, async (ctx, next) => {
    const { acountSetting } = ctx.request.body;
    ctx.request.body = { acountSetting };
    await next();
  }, ClientController.updateById)
  .get('/:id/workspace', bearer, jwt, rolesOne, ObjectController.getWorkspace)
  .get('/:id/objects/', bearer, jwt, rolesThree, ObjectController.get)
  .put('/:id/objects/', bearer, jwt, rolesThree, ObjectController.update)
  .post('/:id/objects/:object', bearer, jwt, rolesThree, ObjectController.create)
  .get('/:id/objects/:object', bearer, jwt, rolesThree, ObjectController.getById)
  .put('/:id/objects/:object', bearer, jwt, rolesThree, ObjectController.updateById)
  .delete('/:id/objects/:object', bearer, jwt, rolesTwo, ObjectController.deleteById);

module.exports = router;
