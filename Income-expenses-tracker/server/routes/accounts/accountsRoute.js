const isLogin = require("../../middlewares/isLogin");
const express = require("express");

const {
  createAccCtrl,
  getAccsCtrl,
  deleteAccCtrl,
  getAccCtrl,
} = require("../../controllers/accounts/accountCtrl");
const { updateAccCtrl } = require("../../controllers/accounts/accountCtrl");

const accoutsRoute = express();

accoutsRoute.post("/accounts", isLogin, createAccCtrl);
accoutsRoute.get("/accounts", getAccsCtrl);
accoutsRoute.get("/accounts/:id", getAccCtrl);
accoutsRoute.delete("/accounts/:id", deleteAccCtrl);
accoutsRoute.put("/accounts/:id", updateAccCtrl);

module.exports = accoutsRoute;
