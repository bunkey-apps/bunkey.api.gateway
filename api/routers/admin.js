import Router from 'koa-router';
const router = new Router({ prefix: '/v1/admin' });
const { AuthPolice } = cano.app.policies;
const {
  UserController,
  ClientController,
  PlanController,
  ContractController,
  PaymentController,
} = cano.app.controllers;

router.post('/users', AuthPolice.jwt, AuthPolice.role, UserController.create);
router.get('/users', AuthPolice.jwt, AuthPolice.role, UserController.get);
router.get('/users/:id', AuthPolice.jwt, AuthPolice.role, UserController.getById);
router.put('/users/:id', AuthPolice.jwt, AuthPolice.role, UserController.updateById);
router.delete('/users/:id', AuthPolice.jwt, AuthPolice.role, UserController.deleteById);

router.post('/clients', AuthPolice.jwt, AuthPolice.role, ClientController.create);
router.get('/clients', AuthPolice.jwt, AuthPolice.role, ClientController.get);
router.get('/clients/:id', AuthPolice.jwt, AuthPolice.role, ClientController.getById);
router.put('/clients/:id', AuthPolice.jwt, AuthPolice.role, ClientController.updateById);
router.delete('/clients/:id', AuthPolice.jwt, AuthPolice.role, ClientController.deleteById);

router.post('/plans', AuthPolice.jwt, AuthPolice.role, PlanController.create);
router.get('/plans', AuthPolice.jwt, AuthPolice.role, PlanController.get);
router.get('/plans/:id', AuthPolice.jwt, AuthPolice.role, PlanController.getById);
router.put('/plans/:id', AuthPolice.jwt, AuthPolice.role, PlanController.updateById);
router.delete('/plans/:id', AuthPolice.jwt, AuthPolice.role, PlanController.deleteById);

router.post('/contracts', AuthPolice.jwt, AuthPolice.role, ContractController.create);
router.get('/contracts', AuthPolice.jwt, AuthPolice.role, ContractController.get);
router.get('/contracts/:id', AuthPolice.jwt, AuthPolice.role, ContractController.getById);
router.put('/contracts/:id', AuthPolice.jwt, AuthPolice.role, ContractController.updateById);
router.delete('/contracts/:id', AuthPolice.jwt, AuthPolice.role, ContractController.deleteById);

router.post('/payments', AuthPolice.jwt, AuthPolice.role, PaymentController.create);
router.get('/payments', AuthPolice.jwt, AuthPolice.role, PaymentController.get);
router.get('/payments/:id', AuthPolice.jwt, AuthPolice.role, PaymentController.getById);
router.put('/payments/:id', AuthPolice.jwt, AuthPolice.role, PaymentController.updateById);
router.delete('/payments/:id', AuthPolice.jwt, AuthPolice.role, PaymentController.deleteById);

module.exports = router
