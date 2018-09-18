var mongoose = require('mongoose');

/**
 * 知乎
 */
var zhihuSchema = new mongoose.Schema({
  // 名字
  name: {
    type: String,
    required: true
  },

  // 性别
  gender: {
    type: Number,
    default: 1,
    enum: [0, 1, 2],
    required: true
  },

  // 关注数
  follower_count: {
    type: Number,
    required: true
  },

  // 赞同数
  voteup_count: {
    type: Number,
    required: true
  },

  // 感谢数
  thanked_count: {
    type: Number
  },

  // 收藏数
  favorited_count: {
    type: Number,
    required: true
  },

  // 回答
  answer: {
    type: Number,
    required: true
  },

  // 提问
  question: {
    type: Number,
    required: true
  },

  // 文章
  article: {
    type: Number,
    required: true
  },

  first_answer: {
    type: Date
  },

  last_answer: {
    type: Date
  }
}, {
  collection: 'zhihu',
  id: false
});

module.exports = mongoose.model('zhihu', zhihuSchema);