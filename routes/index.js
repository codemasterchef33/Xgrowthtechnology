const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");


router.get("/users", userController.getAllUsers);
router.post("/details", userController.getUserDetails);


module.exports = router;
