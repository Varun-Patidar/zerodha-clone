const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// ================= SIGNUP =================

module.exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};

// ================= LOGIN =================

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

// ================= LOGOUT =================

module.exports.Logout = async (req, res) => {
  res.clearCookie("token");

  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};