const cuntao = require('../schema/cuntao');
const renderID = require('../../utils/renderID');

/**
 * 获取单条内容
 * @param {String} id
 */
exports.get = function (id) {
  return cuntao.findOne({ id }).exec()
};

/**
 * 插入单条内容
 * @param {Srting} url
 */
exports.set = async function (url, next) {
  await next()
  let data = await cuntao.findOne({ url }).exec()
  if (!data) {
    let arr = await cuntao.find().sort({ created: -1 }).limit(1)
    let item = arr[0]
    let increment = 100
    if (item) {
      increment = item.increment += 1
    }
    let id = renderID(increment)
    data = await cuntao.create({ id, url, increment })
  } 
  return data
};

/**
 * 查询列表
 * @param {Number} page
 * @param {Number} limit
 */
exports.list = function (page, limit) {
  return cuntao.find().sort({ created: -1 }).limit((page - 1) * limit, limit)
}

/**
 * 查询总数
 * @param {Function} callback
 */
exports.count = function (callback) {
  return cuntao.count({});
}

