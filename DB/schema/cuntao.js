var mongoose = require('mongoose');

/**
 * 煎蛋
 */
var cuntaoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  // 图片地址
  url: {
    type: String,
    required: true
  },
  increment: {
    type: Number,
    required: true
  },
  updated: {
    type: Date, 
    default: Date.now 
  },
  created: {
    type: Date, 
    default: Date.now 
  }
}, {
  collection: 'cuntao',
  id: true
});

module.exports = mongoose.model('cuntao', cuntaoSchema);