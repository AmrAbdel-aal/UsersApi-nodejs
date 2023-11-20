const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  const secretKey = process.env.JWT_SECRET || "amro"; // secure secret key

  // Token payload
  const payload = {
    id: user.id, // User identifier
    email: user.email, // User email
  };

  // Token options
  const options = {
    expiresIn: "1h", // Token expires in 1 hour
  };

  return jwt.sign(payload, secretKey, options);
};

module.exports = generateAccessToken;
