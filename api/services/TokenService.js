import R from 'ramda';

class TokenService {
    save(token) {
        return new Promise((resolve, reject) => {
            token.save((err) => {
                cano.log.error(err);
                cano.log.error(token.errors);
                if (err) return reject(err);
                resolve(true);
            });
        });
    }
    remove(token) {
        return new Promise((resolve, reject) => {
            token.remove((err) => {
                cano.log.error(err);
                cano.log.error(token.errors);
                if (err) return reject(err);
                resolve(true);
            });
        });
    }
    findAndUpdate(query, update) {
        const Token = require('../models/Token');
        return new Promise((resolve, reject) => {
            Token.find(query, (err, [id]) => {
                if (err) return reject(err);
                const token = cano.app.config.redis.nohm.factory('Token');
                token.load(id, (error, properties) => {
                    if (error) return reject(error);
                    token.p(properties);
                    token.p(update);
                    this.save(token)
                        .then(resolve)
                        .catch(reject);
                });
            });
        });
    }
    findAndRemove(query) {
        const Token = require('../models/Token');
        return new Promise((resolve, reject) => {
            Token.find(query, (err, [id]) => {
                if (err) return reject(err);
                const token = cano.app.config.redis.nohm.factory('Token');
                token.load(id, (error) => {
                    if (error) return reject(error);
                    this.remove(token)
                        .then(resolve)
                        .catch(reject);
                });
            });
        });
    }
}

module.exports = TokenService;
