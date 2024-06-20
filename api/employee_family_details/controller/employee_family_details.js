const db = require("../../../index");
const Sequelize = require("sequelize");

const tbl_employee_family_details = db.tbl_employee_family_details;

module.exports.create_family_details = async (req, res) => {
  try {
    const { mother_Name, father_Name, address, city, state, country } = req.body;
    const createData = await tbl_employee_family_details.create({
      mother_Name,
      father_Name,
      address,
      city,
      state,
      country,
    });
    return res.status(200).send({
      code: 200,
      message: "Employee Family Details Created Successfully",
      data: createData,
    });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};
