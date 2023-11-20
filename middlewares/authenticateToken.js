const jwt = require("jsonwebtoken");
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN
  if (token == null) return res.sendStatus(401); // If no token is provided

  jwt.verify(token, process.env.JWT_SECRET || "amro", (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
