const authController = {};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const { signUpValidation,loginValidation } = require("../validations/AuthValidation");

authController.sineUp = async (req, res) => {
  console.log('----------------------request');
  try {
    const { fastName, lastName, userName, email, phone, password } = req.body;

    signUpValidation(req, res);

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fastName,
      lastName,
      userName,
      email,
      phone,
      password: hashPassword,
    });

    const saveUser = await newUser.save();
    console.log(
      "🚀 ~ file: AuthController.js ~ line 43 ~ authController.sineUp= ~ saveUser",
      saveUser
    );

    const token = jwt.sign({ id: saveUser._id }, process.env.JWT_PASSWORD);
    return res.send({
      token,
      userInfo: {
        _id: saveUser._id,
        fastName: saveUser.fastName,
        lastName: saveUser.lastName,
        userName: saveUser.userName,
        email: saveUser.email,
        phone: saveUser.phone,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    loginValidation(req, res);

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "No account with this email has been registers" });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "password incerate" });
    }
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ id: user._id }, process.env.JWT_PASSWORD);
    return res.send({
      token,
      userInfo: {
        _id: user._id,
        fastName: user.fastName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

authController.makeAdmin = async (req, res) => {
  try {
    const { userId } = req;

    const updated = await User.findByIdAndUpdate(
      userId,
      { isAdmin: true },
      {
        new: true,
      }
    );

    return res.send(updated);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = authController;
