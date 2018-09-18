var mongoose = require('mongoose');

/**
 * 煎蛋
 */
var cuntaoSchema = new mongoose.Schema({
  // 图片地址
  url: {
    type: String,
    required: true
  }
}, {
  collection: 'cuntao',
  id: true
});

module.exports = mongoose.model('cuntao', cuntaoSchema);