'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Record.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
        })
    }
  };
  Record.init({
    userId: DataTypes.INTEGER,
    amount: DataTypes.STRING,
    income: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};