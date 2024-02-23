const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const { password } = user;

    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const userInfo = { ...user, password: hashedPassword };

    const result = await User.create(userInfo);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUsers };
