let app = require('../models/cuntao');

const cuntao = async (ctx, next) => {
  console.log(ctx.request.url)
  if (ctx.request.url.indexOf('getCunTaoId') > -1) {
    const data = await app.get(ctx.query.id, next)
    ctx.body = data ? data : {code: 0, msg: '暂时没有数据'}
  } else {
    const data = await app.set(ctx.query.url, next)
    ctx.body = data ? data : { code: 0, msg: '暂时没有数据' }
  }
}

module.exports = cuntao