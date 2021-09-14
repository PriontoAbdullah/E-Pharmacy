const adminMiddleware = {};

adminMiddleware.admin = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await User.findOne(
      {
        _id: userId,
      },
      { isAdmin: 1 }
    );

    if (!user.isAdmin) {
      return res.status(401).json({ message: 'Only Admins are allowed' });
    }
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = adminMiddleware;
