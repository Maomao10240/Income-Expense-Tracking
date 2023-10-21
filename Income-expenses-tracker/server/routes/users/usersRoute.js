const express = require("express");
const isLogin = require("../../middlewares/isLogin");
const {
  registerCtrl,
  loginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
} = require("../../controllers/users/userCtrl");
const userRoute = express();

userRoute.post("/register", registerCtrl);
userRoute.post("/login", loginCtrl);
// GET/api/users/profile/:id
userRoute.get("/profile", isLogin, userProfileCtrl);
userRoute.delete("/profile/:id", isLogin, deleteUserCtrl);
userRoute.put("/profile/:id", updateUserCtrl);
module.exports = userRoute;
