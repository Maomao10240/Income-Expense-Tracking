const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
const Transaction = require("../../model/transaction");

const registerCtrl = async (req, res, next) => {
  const { fullName, password, email } = req.body;

  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(new Error("User Already Exist"));
    }
    //check if fields are empty

    if (!email || !fullName) {
      // return res.json({ message: "Please fill all field" });
      return next(new Error("Please fill all field"));
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.json({
      status: "Success",
      fullName: user.fullName,
      email: user.email,
      id: user.id,
    });
  } catch (error) {
    next(new Error(error));
  }
};
const loginCtrl = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (!userFound) return next(new Error("Invalid Login"));
    //check all login information correct
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (!isPasswordMatch) return next(new Error("invalid Login"));
    //login
    res.json({
      status: "success",
      fullName: userFound.fullName,
      id: userFound.id,
      token: generateToken(userFound.id),
    });
  } catch (error) {
    next(new Error(error));
  }
};
const userProfileCtrl = async (req, res) => {
  // const result = verifyToken(
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM4ZWY4ZmQ1ZjBjMmYwM2FlMjQ3YSIsImlhdCI6MTY5NDgwMjM4MywiZXhwIjoxNjk1NjY2MzgzfQ.7VOgT4b5sEX9NtoC62PoKKbp_UolMcE4jP6NjWVRxQ0"
  // );
  // console.log(result);

  try {
    const userFound = await User.findById(req.user).populate({
      path: "accounts",
      populate: {
        path: "Transactions",
        model: "transaction",
      },
    });

    res.json(userFound);
  } catch (error) {
    res.json(error);
  }
};
const deleteUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete Profile" });
  } catch (error) {
    res.json(error);
  }
};
const updateUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update Profile" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  registerCtrl,
  loginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
};
