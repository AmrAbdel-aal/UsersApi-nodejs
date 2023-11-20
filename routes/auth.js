const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");

const { login, register } = require("../controllers/auth");

router.post("/user", register);
router.get("/user/:id", authenticateToken, login);

module.exports = router;
