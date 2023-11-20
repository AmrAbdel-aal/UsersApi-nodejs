const crypto = require("crypto");
//id programmatically a generated SHA1 hash of the email address
const generateUserId = (email) => {
  const salt = "450d0b0db2bcf4adde5032eca1a7c416e560cf44";
  return crypto
    .createHash("sha1")
    .update(email + salt)
    .digest("hex");
};

module.exports = generateUserId;
