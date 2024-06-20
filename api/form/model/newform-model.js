
module.exports = (sequelize,Sequelize) =>{
    const tbl_new_form = sequelize.define(
        'tbl_new_form',
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
          dob: {
            type: Sequelize.DATE,
          },
          status:{
            type: Sequelize.ENUM("ACTIVE","INACTIVE"),
            defaultValue:"ACTIVE"
          },
          image:{
            type: Sequelize.STRING,
          },
          isDeleted:{
            type: Sequelize.BOOLEAN(true,false),
            defaultValue:false
          },
        },
        { freezeTableName: true }
      );
      return tbl_new_form;
}