const User = require("../models/UserModel");

const authValidation = {};

// eslint-disable-next-line no-useless-escape
const reg_exp_for_email =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

authValidation.signUpValidation = async (req, res) => {
  const { fastName, lastName, userName, email, phone,  password, cmPassword  } = req.body;

  if (!fastName || !lastName || !userName || !email || !phone || !password || !cmPassword) {
    return res.status(400).json({ message: "Not all field have been entered" });
  }
  if (!reg_exp_for_email.test(String(email).toLowerCase())) {
    return res
      .status(400)
      .json({ message: "please enter a valid email address" });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "The password need to be at least 6 characters long.",
    });
  }
  if (password !== cmPassword) {
    return res
      .status(400)
      .json({ message: "Enter the save password twice for verification." });
  }
  const existingUser = await User.findOne({ email }, { email: 1 });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "An account with this email already exists" });
  }
};

authValidation.loginValidation = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Not all field have been entered" });
  }
  if (!reg_exp_for_email.test(String(email).toLowerCase())) {
    return res
      .status(400)
      .json({ message: "please enter a valid email address" });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "The password need to be at least 6 characters long.",
    });
  }
};
module.exports = authValidation;
