const db = require("../../../index");
const Sequelize = require("sequelize");

const tbl_employee_details = db.tbl_employee_details;

module.exports.createemployee_Details = async (req, res) => {
  try {
    // Log the entire req object to inspect its structure
    console.log(req, "Request Object");

    // Log the parsed form data (if any)
    console.log(req.body, "Form Data");

    // Process the form data and save employee details to the database

    // Send a response indicating success
    res.status(200).json({ message: 'Employee details created successfully' });
  } catch (error) {
    // Log any errors that occur during the process
    console.log(error);
    // Send an error response if something went wrong
    res.status(500).json({ error: 'An error occurred while creating employee details' });
  }
};



exports.get_employee_Details = async (req, res) => {
    try {
    //   const cityId = req.params.city_Id;
      const data = await tbl_employee_details.findAll({
        // where:{
        // isDeleted:false,
        // status:"ACTIVE"
    // }
      });
      return res.status(200).send({ code: 200, message: data });
    } catch (error) {
      console.log("Error", error);
      return res
        .status(500)
        .send({ code: 500, message: error.message || "Server Error" });
    }
  };
  
//   return true
//   for (let i=0;i<=req.body.employeedetails.length; i++){
//     const createData =  await tbl_employee_details.create({
//       Name: req.body[i].Name,
//       contact: req.body[i].contact,
//       city_Name: req.body[i].city_Name,
//     })
//   }
   
//     return res.status(200).send({
//       code: 200,
//       message: "Employee Details Created Successfully",
//       // data: create_Data,
//     });
//   }  catch (error) {
//   console.log("Error", error);
//   return res
//     .status(500)
//     .send({ code: 500, message: error.message || "Server Error" });
// }