module.exports = (sequelize, Sequelize) => {
  const tbl_employee_details = sequelize.define(
    "tbl_employee_details",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Name: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.INTEGER,
      },
      city_Name: {
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
  return tbl_employee_details;
};
