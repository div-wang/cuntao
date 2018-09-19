const fs = require('fs');
const http = require('http');
const https = require('https');

const Koa = require('koa');
const Router = require('koa-router')();

const db = require('./DB');
const logger = require('./utils/logger');
const header = require('./middleware/header');
const onerror = require('./middleware/onerror');
const app = new Koa();

const homeTpl = require('./view/home');
const detailTpl = require('./view/detail');

app.use(onerror);
app.use(header);

const cuntao = require('./DB/controller/cuntao');
Router.get('/api/getCunTaoId', cuntao);
Router.get('/api/setCunTaoUrl', cuntao);

Router.get('/', homeTpl)
Router.get('/u/:id', detailTpl)


app.use(Router.routes());

http.createServer(app.callback()).listen(3010);
var credentials = {
  "key": fs.readFileSync('/Users/div/.ssh/div.key', 'utf8'),
  "cert": fs.readFileSync('/Users/div/.ssh/div.cert', 'utf8')
};
https.createServer(credentials, app.callback()).listen(3011);

logger.info('listen: 3010');








