const jwt = require("jsonwebtoken");

const userVerification = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Authentication required",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_KEY
    );

    req.user = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = {
  userVerification,
};