const express = require("express");
const router = express.Router();


const authController = require("./auth.controller");

router

  .get("/", authController.findAll)

  .get("/teacher", authController.findTeacher)

  .get("/user", authController.findUser)

  .get("/teacher/count", authController.CountTeacher)
  
  .put("/status/suspend/:id", authController.statusUpdate)

  .put("/status/approve/:id", authController.statusApprove)

  .get("/user/count", authController.CountUser) 

  .post("/", authController.create) // Create a new User

  .post("/login", authController.login)

  .get("/resetpassword", authController.resetPassword) // to reset a user password
  .post("/resetpassword", authController.resetPasswordDetails) // to reset a user password
  .post("/reset/password", authController.changePassword) // to reset a user password
  
  .get("/verify-token", (err, res) => {
    res.json('1')
  }) 
  
  .get("/:id", authController.findById)

  .delete('/delete/:id', authController.delete);

  
module.exports = router;