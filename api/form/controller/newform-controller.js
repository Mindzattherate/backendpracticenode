const db = require("../../../index");
const Sequelize = require("sequelize");
const tbl_new_form = db.tbl_new_form;
const { Op } = Sequelize;
//============= ==============//

exports.new_form_controller = async (req, res) => {
  try {
    const { Name, contact, dob } = req.body;
    let image = "";
    if (req.file && req.file["filename"] && req.file["filename"].length > 0) {
      image = req.file.path;
      image = image.replace(/\\/g, "/");
    } else {
      image = "";
    }
    const finding = await tbl_new_form.findOne({
      where: {
        Name,
        contact,
      },
    });
    if (finding) {
      return res.status(409).send({ code: 409, message: "already exist" });
    } else {
      const createData = await tbl_new_form.create({
        Name,
        contact,
        image,
        dob,
      });
      return res.status(200).send({
        code: 200,
        message: "Employee Details Created Successfully",
        data: createData,
      });
    }
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.get_new_form = async (req, res) => {
  try {
    const data = await tbl_new_form.findAll({
      where: {
        image: { [Op.ne]: null },
      },
    });
    return res.status(200).send({ code: 200, message: data });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.update_new_form = async (req, res) => {
  try {
    const id = req.params.id;
    const { Name, contact, dob } = req.body;
    const finding = await tbl_new_form.findOne({
      where: { id },
    });
    if (finding) {
      let image = finding.image;
      if (req.file && req.file["filename"] && req.file["filename"].length > 0) {
        image = req.file.path;
        image = image.replace(/\\/g, "/");
      } else {
        image = image;
      }
      const updateData = await tbl_new_form.update(
        { Name, contact, image, dob },
        {
          where: { id },
        }
      );
      return res.status(200).send({
        code: 200,
        message: "New Form Created Successfully",
        data: updateData,
      });
    } else {
      return res.status(209).send({
        code: 209,
        message: "Record Not Found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      code: 500,
      message: error.message || "Internal Server Error",
    });
  }
};
exports.delete_new_form = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await tbl_new_form.update(
      { isDeleted: true, status: "INACTIVE" },
      {
        where: { id },
      }
    );
    return res.status(200).send({
      code: 200,
      message: "New Form deleted Successfully",
      data: deleteData,
    });
  } catch (error) {
    return res.status(500).send({
      code: 500,
      message: error.message || "Internal Server Error",
    });
  }
};
