var mongoose = require('mongoose');

/**
 * 煎蛋
 */
var jiandanSchema = new mongoose.Schema({
  // 图片地址
  url: {
    type: String,
    required: true
  },

  // 喜欢
  like: {
    type: Number,
    required: true
  },

  // 不喜欢
  lower: {
    type: Number,
    unique: true
  },

  // id
  _id: {
    type: String
  },
}, {
  collection: 'jiandan',
  id: false
});

module.exports = mongoose.model('jiandan', jiandanSchema);