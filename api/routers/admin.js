import Router from 'koa-router';

const { bearer, jwt, role } = AuthPolicies;

const router = new Router({ prefix: '/v1/admin' });
const isAdmin = role('admin');

router
    .post('/users', bearer, jwt, isAdmin, UserController.create)
    .get('/users', bearer, jwt, isAdmin, UserController.get)
    .get('/users/:id', bearer, jwt, isAdmin, UserController.getById)
    .put('/users/:id', bearer, jwt, isAdmin, UserController.updateById)
    .delete('/users/:id/work-clients/:client', bearer, jwt, isAdmin, UserController.removeWorkClient)
    .delete('/users/:id', bearer, jwt, isAdmin, UserController.deleteById)

    .post('/clients', jwt, isAdmin, ClientController.create)
    .get('/clients', jwt, isAdmin, ClientController.get)
    .get('/clients/:id', jwt, isAdmin, ClientController.getById)
    .get('/clients/:id/contracts', jwt, isAdmin, ClientController.getContracts)
    .get('/clients/:id/users', jwt, isAdmin, ClientController.getUsers)
    .put('/clients/:id', jwt, isAdmin, ClientController.updateById)
    .delete('/clients/:id', jwt, isAdmin, ClientController.deleteById)

    .post('/contracts', jwt, isAdmin, ContractController.create)
    .get('/contracts', jwt, isAdmin, ContractController.get)
    .get('/contracts/:id', jwt, isAdmin, ContractController.getById)
    .put('/contracts/:id', jwt, isAdmin, ContractController.updateById)
    .delete('/contracts/:id', jwt, isAdmin, ContractController.deleteById)

    .get('/contracts/:contract/payments', jwt, isAdmin, PaymentController.getByContractId)
    .put('/contracts/:contract/payments/:id', jwt, isAdmin, PaymentController.updateById)
    
    .post('/tags', jwt, isAdmin, TagController.create)
    .get('/tags', jwt, isAdmin, TagController.get)
    .put('/tags/:id', jwt, isAdmin, TagController.updateById)
    .delete('/tags/:id', jwt, isAdmin, TagController.deleteById);
    

module.exports = router;
