const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const accessToken = req.headers?.authorization?.split(" ")[1];
  if (!accessToken) return res.status(401).send({ message: "Unauthorized" });
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
