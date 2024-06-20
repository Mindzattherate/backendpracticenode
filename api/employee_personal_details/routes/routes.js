const employee_personal_details = require("../controller/controller");

module.exports = app => {
    app.post("/api/v1/create_personal_details", employee_personal_details.create_personal_details);
    app.get("/api/v1/get_personal_details", employee_personal_details.get_personal_details);
}