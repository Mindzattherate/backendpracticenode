const db = require("../../../index");
const ndb = require("../model/employee_personal_details_model")
const Sequelize = require("sequelize");

const tbl_employee_personal_details = db.tbl_employee_personal_details;
const tbl_employee_family_details = db.tbl_employee_family_details;

module.exports.create_personal_details = async (req, res) => {
  try {
    const { employee_Name, salary, joining_date, designation, familydetails } =
      req.body;
    const createData = await tbl_employee_personal_details.create({
      employee_Name,
      salary,
      joining_date,
      designation,
    });
    const familydata = familydetails.map((item) => {
      tbl_employee_family_details.create({
        mother_Name: item.mother_Name,
        father_Name: item.father_Name,
        address: item.address,
        city: item.city,
        state: item.state,
        country: item.country,
        employee_id: createData.id,
      });
    });
    // for(let i = 0 ; i<=familydetails.length; i++){
    //     tbl_employee_family_details.create({
    //           mother_Name:familydetails[i].mother_Name,
    //           father_Name:familydetails[i].father_Name,
    //           address:familydetails[i].address,
    //           city:familydetails[i].city,
    //           state:familydetails[i].state,
    //           country:familydetails[i].country,
    //           employee_id: createData.id
    //     })
    // }
    return res.status(200).send({
      code: 200,
      message: "Employee Details Created Successfully",
      data: createData,
      //   showdata,
    });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

module.exports.get_personal_details = async (req, res) => {
  try {
    const data = await tbl_employee_personal_details.findAll({
      where: {
        isDeleted: false,
        status: "ACTIVE",
      },
      include:{
        model:tbl_employee_family_details,
        attributes:["mother_Name"]
      }
    });

    // const data = await db.sequelize.query('SELECT tep.*, tef.mother_Name  FROM tbl_employee_personal_details AS tep INNER JOIN tbl_employee_family_details AS tef ON tef.employee_id = tep.id WHERE tep.status="ACTIVE" AND tep.isDeleted = 0')


    return res.status(200).send({ code: 200, message: data });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

// module.exports.create_personal_details = async (req, res) => {
//   try {
//     const {
//       employee_Name,
//       salary,
//       joining_date,
//       designation,
//       mother_Name,
//       father_Name,
//       address,
//       city,
//       state,
//       country,
//     } = req.body;
//     const createData = await tbl_employee_personal_details.create({
//       employee_Name,
//       salary,
//       joining_date,
//       designation,
//     });
//     const familydata = await tbl_employee_family_details.create({
//       mother_Name,
//       father_Name,
//       address,
//       city,
//       state,
//       country,
//       employee_id: createData.id
//     });
//     return res.status(200).send({
//       code: 200,
//       message: "Employee Details Created Successfully",
//       data: createData,
//       familydata,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     return res
//       .status(500)
//       .send({ code: 500, message: error.message || "Server Error" });
//   }
// };
