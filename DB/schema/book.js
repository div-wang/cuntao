var mongoose = require('mongoose');

/**
 * 图书
 */
var bookSchema = new mongoose.Schema({
  // 名字
  name: {
    type: String,
    required: true
  },

  // 作者
  author: {
    type: String,
    required: true
  },

  // 出版社
  press: {
    type: String,
    required: true
  },
  
  // 价格
  price: {
    type: Number,
    required: true
  },

  // 数量
  num: {
    type: Number
  },

  // ISBM号
  ISBM: {
    type: Number,
    required: true
  },

  // 评分
  rating: {
    type: Number
  },

  // 评论
  commit: {
    type: Number
  },

  // 出版日期
  date: {
    type: Date
  }
}, {
    collection: 'book',
    id: false
  });

module.exports = mongoose.model('book', bookSchema);