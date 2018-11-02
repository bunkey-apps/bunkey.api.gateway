import Router from 'koa-router';

const router = new Router({ prefix: '/v1' });
const { AuthController } = cano.app.controllers;
const { bearer, jwt } = AuthPolicies;

router.post('/recovery-password', AuthController.recoveryPassword);
router.post('/url-signature', bearer, jwt, ObjectController.getUrlSignature);


module.exports = router;
