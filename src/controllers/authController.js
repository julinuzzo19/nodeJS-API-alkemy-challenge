const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../database/models');

const authController = {
  login: async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({
      where: {
        email: email
      }
    }).catch((err) => console.log(err));

    if (user) {
      const isEqual = await comparePassword(password, user.password);

      if (isEqual) {
        const token = jwt.sign(user.id, process.env.SECRET_KEY);
        res.json({token});
      } else {
        res.json({message: 'Los datos no coinciden'});
      }
    }
  },

  register: async (req, res) => {
    const {email, password} = req.body;

    const dataEncrypted = await encryptPassword(password);
    const userCreated = await User.create({email, password: dataEncrypted});

    if (userCreated) {
      res.status(201).json({
        message: 'User created'
      });
    } else {
      res.status(400).json({message: 'User has been not created'});
    }
  }
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

const comparePassword = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password);
};

module.exports = authController;
