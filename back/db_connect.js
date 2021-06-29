import Sequelize from 'sequelize'

export default new Sequelize(
    process.env.DB_NAME,
    config.USER_NAME,
    config.PASSWORD, 
    {
        host: config.HOST,
        dialect: config.DIALECT,
        define: {
            timestamps: false
        }
    })