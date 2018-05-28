import Router from 'koa-router';
const router = new Router({ prefix: '/v1' });
const { AuthController } = cano.app.controllers;

router.post('/recovery-password', AuthController.recoveryPassword);
router.put('/recovery-password', AuthController.updatePassword);

module.exports = router
