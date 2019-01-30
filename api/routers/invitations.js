import Router from 'koa-router';

const { InvitationController } = cano.app.controllers;
const { AuthPolicies: { bearer, jwt, role } } = cano.app.policies;
const router = new Router({ prefix: '/v1/invitations' });
const isAllowed = role(['admin', 'editor', 'client', 'operator']);
const isInvited = role('invited');

router
      .post('/', bearer, jwt, isAllowed, InvitationController.create)
      .post('/validate', InvitationController.validate)
      .post('/answer', bearer, jwt, isInvited, InvitationController.answer);

module.exports = router;
