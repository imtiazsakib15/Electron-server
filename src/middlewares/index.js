const cors = require("cors");
const express = require("express");
const app = express();

const applyMiddleware = () => {
  app.use(cors());
  app.use(express.json());
};

module.exports = applyMiddleware;
