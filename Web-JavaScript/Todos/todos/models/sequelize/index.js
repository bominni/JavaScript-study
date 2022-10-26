const {Sequelize} = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json') [env];
const sequelize = new Sequelize(
    config.database, // database
    config.username, // username
    config.password, // password
    config // host, dialect
);

module.exports = sequelize;