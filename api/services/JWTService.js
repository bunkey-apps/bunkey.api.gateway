import jwt from 'jsonwebtoken';
// process.env.SECRET_JWT_KEY
class TokenService {
  isTokenExpired(accessToken) {
    return new Promise((resolve) => {
      jwt.verify(accessToken, process.env.JWT_TOKEN_SECRET, (err) => {
        resolve((err && err.name === 'TokenExpiredError'));
      });
    });
  }
}

module.exports = TokenService;
