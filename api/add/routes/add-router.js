
const express = require('express');
const {upload} = require('../../../middleware/file')
const employeedetailsContoller = require("../controller/add-controller");

module.exports = app => {

    app.post("/api/v1/create_employee_details",upload.single("image"), employeedetailsContoller.createemployee_Details);
}



// const employeedetailsContoller = require("../controller/add-controller");

// module.exports = app => {
//     app.post("/api/v1/create_employee_details", employeedetailsContoller.createemployee_Details);
//     app.get("/api/v1/get_all_employee_details", employeedetailsContoller.get_employee_Details);
// }