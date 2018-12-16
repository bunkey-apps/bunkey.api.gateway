import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/clients' });

const rolesOne = role(['admin', 'editor', 'client']);
const rolesTwo = role(['admin', 'editor']);

router
.get('/:id', bearer, jwt, ClientController.getById)
.put('/:id', bearer, jwt, rolesOne, async (ctx, next) => {
  const { acountSetting } = ctx.request.body;
  ctx.request.body = { acountSetting };
  await next();
}, ClientController.updateById)
.get('/:id/workspace', bearer, jwt, rolesOne, ObjectController.getWorkspace)
.get('/:id/objects/', bearer, jwt, ObjectController.get)
.post('/:id/objects/:object', bearer, jwt, rolesTwo, ObjectController.create)
.get('/:id/objects/:object', bearer, jwt, ObjectController.getById)
.put('/:id/objects/:object', bearer, jwt, rolesTwo, ObjectController.updateById)
.delete('/:id/objects/:object', bearer, jwt, rolesTwo, ObjectController.deleteById);

module.exports = router;
