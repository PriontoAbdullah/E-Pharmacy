const jwt = require('jsonwebtoken');

const authMiddleware = {};

authMiddleware.auth = (req, res, next) => {
  try {
    const authToken = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!authToken) {
      return res.status(401).json({ message: 'No authentication token, authorization denied' });
    }
    const verifiedToken = jwt.verify(authToken, process.env.JWT_PASSWORD);
    if (!verifiedToken) {
      return res.status(401).json({ message: 'Token verification failed, authorization denied' });
    }
    req.userId = verifiedToken.id;
    console.log('🚀 ~ file: Auth.js ~ line 16 ~ verifiedToken.id', verifiedToken.id);
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = authMiddleware;
