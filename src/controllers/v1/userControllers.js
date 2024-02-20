const User = require("./../../models/userModel");

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await User.create(user);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser };
