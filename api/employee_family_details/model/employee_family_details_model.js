module.exports = (sequelize, Sequelize) => {
    const tbl_employee_family_details = sequelize.define(
      "tbl_employee_family_details",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        mother_Name: {
          type: Sequelize.STRING,
        },
        father_Name: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        state: {
          type: Sequelize.STRING,
        },
        country: {
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
    return tbl_employee_family_details;
  };
  