const Sequelize = require('sequelize')
const connection = require('../db_connect.js')

const User = connection.define('users', {
    user_id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    freezeTableName: true
})

module.exports = User