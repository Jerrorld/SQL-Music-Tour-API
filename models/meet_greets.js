'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_greets.init({
    meet_greet_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'meet_greets',
  });
  return meet_greets;
};