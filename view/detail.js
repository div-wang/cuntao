const art = require('art-template');
const path = require('path');

module.exports = async (ctx, next) => {
  await next();
  if (!ctx.body) {
    let data = {};
    let template = path.resolve(__dirname, '../template/detail.art');
    if (template) {
      ctx.body = art(template, data);
    }
  }
};
