module.exports = cano.app.config.redis.nohm.model('Token', {
  properties: {
    accessToken: {
      type: 'string',
      index: true,
      validations: [['notEmpty']],
    },
    refreshToken: {
      type: 'string',
      index: true,
      validations: [['notEmpty']],
    },
  },
});
