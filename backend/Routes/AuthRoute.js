const express = require("express");

const {
  Signup,
  Login,
  Logout,
} = require("../Controllers/AuthController");

const {
  userVerification,
} = require("../Middleware/AuthMiddleware");

const router = express.Router();

router.post("/signup", Signup);

router.post("/login", Login);

router.post("/logout", Logout);

router.get(
  "/verify",
  userVerification,
  (req, res) => {
    res.status(200).json({
      status: true,
      message: "User is authenticated",
      userId: req.user,
    });
  }
);

module.exports = router; 