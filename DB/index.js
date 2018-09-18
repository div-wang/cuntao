const mongoose = require('mongoose');
const config = require('../config/db');

mongoose.connect(`mongodb://${config.user}:${config.pass}@${config.host}:${config.port}/${config.db}`, { useMongoClient: true });
mongoose.Promise = require('bluebird');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db
