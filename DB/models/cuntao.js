var cuntao = require('../schema/cuntao');

/**
 * 获取单条内容
 * @param {String} id
 */
exports.get = function (_id) {
  return cuntao.findOne({ _id }).exec()
};

/**
 * 插入单条内容
 * @param {Srting} url
 */
exports.set = function (url) {
  return cuntao.create({ url })
  // return new Promise(() = {
  //   cuntao.findOne({ _id }, () => {

  //   })
  // })
};

/**
 * 查询总数
 * @param {Function} callback
 */
exports.count = function (callback) {
  cuntao.count({}, callback);
}

