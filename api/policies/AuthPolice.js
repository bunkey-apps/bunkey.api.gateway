const { MessageService } = cano.app.services;

class AuthPolice {

  async jwt({ request, response }, next) {
    await next();
  }

  async role({ request, response }, next) {
    await next();
  }

}

module.exports = AuthPolice;