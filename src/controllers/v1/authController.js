const createToken = require("../../utils/createToken");

const createAccessToken = (req, res, next) => {
  try {
    const user = req.body;
    const accessToken = createToken(user);
    res.send({ accessToken });
  } catch (err) {
    next(err);
  }
};

module.exports = createAccessToken;
