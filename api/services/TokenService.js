/* eslint global-require:0*/
// import R from 'ramda';

class TokenService {
    save(token) {
        return new Promise((resolve, reject) => {
            token.save((err) => {
                if (err) {
                    cano.log.error(token.errors);
                    return reject(err);
                }
                resolve(true);
            });
        });
    }
    remove(token) {
        return new Promise((resolve, reject) => {
            token.remove((err) => {
                if (err) {
                    cano.log.error(token.errors);
                    return reject(err);
                }
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
                if (err) {
                    cano.log.error(err);
                    return reject(err);
                }
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
    exist(query) {
        const Token = require('../models/Token');
        return new Promise((resolve, reject) => {
            Token.find(query, (err, ids) => {
                if (err) return reject(err);
                return (ids.length === 0) ? resolve(false) : resolve(true);
            });
        });
    }
    findOne(query) {
        const Token = require('../models/Token');
        return new Promise((resolve, reject) => {
            Token.find(query, (err, [id]) => {
                if (err) return reject(err);
                const token = cano.app.config.redis.nohm.factory('Token');
                token.load(id, (error, properties) => {
                    if (error) return reject(error);
                    return resolve(properties);
                });
            });
        });
    }
}

module.exports = TokenService;
