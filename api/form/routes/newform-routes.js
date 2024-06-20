const newformcontroller = require("../controller/newform-controller");
const {upload} = require("../../../middleware/file");


module.exports = app => {

    app.post("/api/v1/new_form_controller_file",upload.single("image"), newformcontroller.new_form_controller);
    app.get("/api/v1/get_new_form_controller_file", newformcontroller.get_new_form);
    app.put("/api/v1/update_new_form_controller_file/:id", upload.single("image"),newformcontroller.update_new_form);
    app.delete("/api/v1/delete_new_form_controller_file/:id", newformcontroller.delete_new_form);
}