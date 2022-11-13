'use strict'
const {
  Model
} = require('sequelize');
const band = require('./band');
module.exports = (sequelize, DataTypes) => {

  class MeetGreet extends Model {

    static associate({ Band, Event, Stage }) {
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  };
  MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  })
  return MeetGreet
}