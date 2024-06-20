const express = require('express');
const Sequelize = require('sequelize');
const config = require('./db_config/config');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  });
  const db = {}
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

//--------------------------models--------------------------//
db.tbl_employee_details = require("./api/add/model/add-model")(sequelize,Sequelize)
db.tbl_new_form = require("./api/form/model/newform-model")(sequelize,Sequelize)
db.tbl_employee_personal_details = require("./api/employee_personal_details/model/employee_personal_details_model")(sequelize,Sequelize)
db.tbl_employee_family_details = require("./api/employee_family_details/model/employee_family_details_model")(sequelize,Sequelize)


//==========================relations=======================//



db.tbl_employee_personal_details.hasMany(db.tbl_employee_family_details, { foreignKey: "employee_id", onDelete: 'RESTRICT' })
db.tbl_employee_family_details.belongsTo(db.tbl_employee_personal_details,{foreignKey: "employee_id"})







module.exports = db