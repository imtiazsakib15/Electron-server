const jwt = require("jsonwebtoken");
require(dotenv).config();

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { createToken };
