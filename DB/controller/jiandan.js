let app = require('../models/jiandan');

module.exports = function (req, res) {
  app.one(function (err, data) {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).end(data);
    }
  });
}