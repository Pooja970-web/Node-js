
const jwt = require("jsonwebtoken");

// Generate Access Token
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES
    }
  );
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES
    }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
