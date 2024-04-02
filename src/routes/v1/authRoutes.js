const createAccessToken = require("../../controllers/v1/authController");

const router = require("express").Router();

// Create access token
router.post("/jwt", createAccessToken);

module.exports = router;
