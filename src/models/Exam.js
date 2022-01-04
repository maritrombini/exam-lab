const { Sequelize, DataTypes } = require('sequelize')
const { database } = require('../db')

const Exam = database.define('Exam', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  doctor: {
    type: DataTypes.STRING
  },
  specialty: {
    type: DataTypes.STRING
  },
  clinic: {
    type: DataTypes.STRING
  },
  expected_date: {
    type: DataTypes.STRING
  },
  done: {
    type: DataTypes.BOOLEAN
  }
})

Exam.sync()

module.exports = Exam
