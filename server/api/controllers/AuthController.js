const authController = {};
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const {sineUpValidation} = require('../validations/AuthValidation');


authController.sineUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    sineUpValidation(req,res)
    
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    const saveUser = await newUser.save();
    console.log(
      '🚀 ~ file: AuthController.js ~ line 43 ~ authController.sineUp= ~ saveUser',
      saveUser
    );

    const token = jwt.sign({ id: saveUser._id }, process.env.JWT_PASSWORD);
    return res.send({
      token,
      userInfo: {
        id: saveUser._id,
        name: saveUser.name,
        email: saveUser.email,
        isAdmin: saveUser.isAdmin,
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

    sineUpValidation(req,res);

    const user = await User.findOne({ email });
    console.log('🚀 ~ file: AuthController.js ~ line 79 ~ authController.login= ~ user', user);
    if (!user) {
      return res.status(400).json({ message: 'No account with this email has been registers' });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: 'password incerate' });
    }
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ id: user._id }, process.env.JWT_PASSWORD);
    return res.send({
      token,
      userInfo: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
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
      },
    );

    return res.send(updated);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = authController;
