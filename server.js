import Cano from 'cano-koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
require('babel-core/register');
require('babel-polyfill');

const app = new Cano(__dirname);

app.use(logger('combined'));
app.use(parser());

app.on('error', err => {
  app.log.error('server error', err);
});

app.up().then(server => {

}).catch(err => {
  app.log.error('Error on ', err);
});
