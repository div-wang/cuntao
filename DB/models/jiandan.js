let assert = require('assert');
var jiandan = require('../schema/jiandan');

/**
 * 单条内容
 * @param {Function} callback
 */
exports.one = function (callback) {
  jiandan.aggregate({ $sample: { size: 1 } }).exec(callback)
};

/**
 * 查询总数
 * @param {Function} callback
 */
exports.count = function (callback) {
  jiandan.count({}, callback);
}

/**
 * 顶 && 踩
 * @param {Object} options
 *        {MongoId} options._id
 *        {String} options.url
 *        {Boolean} options.like
 * @param {Function} callback
 */
exports.voteup = async function (options, callback) {
  let err = {
    type: 'system',
    error: 'no image found'
  };
  if (!options || !options._id) {
    callback(err);
  }

  let _id = options._id;
  let like = options.like;
  let data = await jiandan.findOne({ '_id': _id })
  let update = like ? { 'like': data.like + 1 } : { 'lower' : data.lower + 1 }
  jiandan.update({ '_id': _id }, { $set: update }, callback); 
};

