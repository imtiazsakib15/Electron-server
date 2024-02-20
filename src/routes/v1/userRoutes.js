const { createUser } = require("../../controllers/v1/userControllers");

const router = require("express").Router();

router.post("/", createUser);

module.exports = router;
