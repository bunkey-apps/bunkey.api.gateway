import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/admin' });
const isAdmin = role('admin');

router
    .post('/users', bearer, jwt, isAdmin, UserController.create)
    .get('/users', bearer, jwt, isAdmin, UserController.get)
    .get('/users/:id', bearer, jwt, isAdmin, UserController.getById)
    .put('/users/:id', bearer, jwt, isAdmin, UserController.updateById)
    .delete('/users/:id', bearer, jwt, isAdmin, UserController.deleteById)

    .post('/clients', AuthPolicies.jwt, isAdmin, ClientController.create)
    .get('/clients', AuthPolicies.jwt, isAdmin, ClientController.get)
    .get('/clients/:id', AuthPolicies.jwt, isAdmin, ClientController.getById)
    .get('/clients/:id/contracts', AuthPolicies.jwt, isAdmin, ClientController.getContracts)
    .put('/clients/:id', AuthPolicies.jwt, isAdmin, ClientController.updateById)
    .delete('/clients/:id', AuthPolicies.jwt, isAdmin, ClientController.deleteById)

    .post('/contracts', AuthPolicies.jwt, isAdmin, ContractController.create)
    .get('/contracts', AuthPolicies.jwt, isAdmin, ContractController.get)
    .get('/contracts/:id', AuthPolicies.jwt, isAdmin, ContractController.getById)
    .put('/contracts/:id', AuthPolicies.jwt, isAdmin, ContractController.updateById)
    .delete('/contracts/:id', AuthPolicies.jwt, isAdmin, ContractController.deleteById)

    .post('/contracts/:contract/payments', AuthPolicies.jwt, isAdmin, PaymentController.create)
    .get('/contracts/:contract/payments', AuthPolicies.jwt, isAdmin, PaymentController.getByContractId)
    .get('/payments', AuthPolicies.jwt, isAdmin, PaymentController.get)
    .put('/contracts/:contract/payments/:id', AuthPolicies.jwt, isAdmin, PaymentController.updateById)
    .delete('/contracts/:contract/payments/:id', AuthPolicies.jwt, isAdmin, PaymentController.deleteById);

module.exports = router;
