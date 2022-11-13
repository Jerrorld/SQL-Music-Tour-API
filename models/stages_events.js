'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stages_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stages_events.init({
    stage_event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stages_events',
  });
  return stages_events;
};