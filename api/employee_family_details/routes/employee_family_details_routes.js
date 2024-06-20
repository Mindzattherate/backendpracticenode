const employee_family_details = require("../controller/employee_family_details");

module.exports = app => {
    app.post("/api/v1/create_family_details", employee_family_details.create_family_details);
}