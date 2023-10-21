const getToken = require("../utils/getToken");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  //get token from req header
  const token = getToken(req);
  // console.log(token);
  //verify
  const decodedUser = verifyToken(token);
  // save the user into the req obj
  if (!decodedUser) {
    return next(new Error("Invalid Token, please login"));
  }
  req.user = decodedUser.id;
  next();
};
module.exports = isLogin;
