const jwt = require('jsonwebtoken');
const User = require('../database/models/user');
const verifyToken = async (req, res, next) => {
  try {
    const tokenReceived = req.headers['authorization'];
    const token = tokenReceived.split(' ')[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findByPk(decoded);
    if (user) {
      next();
    } else res.status(404).json({message: 'User not found'});
  } catch (error) {
    res.status(403).json({message: 'Token must provided', error});
  }
};

module.exports = verifyToken;
