const Sequelize = require('sequelize')
import config from './config'

const connection = new Sequelize(
    config.DB_NAME,
    config.USER_NAME,
    config.PASSWORD, 
    {
        host: config.HOST,
        dialect: config.DIALECT,
        define: {
            timestamps: false
        }
    })

module.exports = connection