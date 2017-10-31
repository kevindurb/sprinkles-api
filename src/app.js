const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const debug = require('debug')('antibudget:app');
const app = express();

app.use(require('helmet')());
app.use(require('cors')());

app.use(require('body-parser').json());
app.use(session({
  store: new RedisStore({ url: process.env.REDIS_URL }),
  secret: process.env.SECRET,
}));
app.use(routes);

app.get('/', (req, res) => {
  debug('status:OK');
  res.send('OK');
});

app.all('*', function(req, res){
  debug('404');
  res.status(404);
  res.end();
});

module.exports = app;
