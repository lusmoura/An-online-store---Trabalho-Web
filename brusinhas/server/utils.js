const { createHash } = require("crypto");

function SHA256(str) {
  return createHash("sha256").update(str).digest("hex");
}

module.exports = SHA256;
