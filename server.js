const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./index");
const dotenv = require("dotenv");
const sequelize = require("sequelize");
const multer = require('multer');


//=========== GD Sync ============//
dotenv.config();

// db.sequelize.sync({alter:true})
//   .then(() => {
//     console.log("Synced db success...");
//   }).catch((err) => {
//     console.log("Failed to sync db...", err.message)
//   });


var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the EM Procurement Back-End!"});
});

app.use(express.static("public"));


const corsOpts = {
    origin: "*",
    methods: ["GET", "PATCH", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  };
  app.use(cors(corsOpts));


//////////////------------------viewdocumentsthoroughurl----------------------------//////////////////////
  app.use('/documents', express.static(path.join(__dirname, '/documents')));


//================= Routes ==================//
require("./api/add/routes/add-router")(app);
// app.use('/',require('./api/add/routes/add-router'));
require("./api/form/routes/newform-routes")(app);
require("./api/employee_family_details/routes/employee_family_details_routes")(app);
require("./api/employee_personal_details/routes/routes")(app);






//================== Server ==================//

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

