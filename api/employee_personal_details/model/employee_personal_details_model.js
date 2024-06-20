module.exports = (sequelize, Sequelize) => {
    const tbl_employee_personal_details = sequelize.define(
      "tbl_employee_personal_details",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        employee_Name: {
          type: Sequelize.STRING,
        },
        salary: {
          type: Sequelize.INTEGER,
        },
        joining_date: {
          type: Sequelize.DATEONLY,
        },
        designation: {
          type: Sequelize.STRING,
        },
        status:{
          type: Sequelize.ENUM("ACTIVE","INACTIVE"),
          defaultValue:"ACTIVE"
        },
        isDeleted:{
          type: Sequelize.BOOLEAN(true,false),
          defaultValue:false
        },
      },
      { freezeTableName: true }
    );
    return tbl_employee_personal_details;
  };
  