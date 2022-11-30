require("process");

const loadEnv = () => {
  return {
    MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/db",
    MONGO_USER: process.env.MONGO_USER || "user",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "pass",
  };
};

module.exports = loadEnv;
