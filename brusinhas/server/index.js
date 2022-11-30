const { connect } = require("mongoose");
const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

const app = express();
const port = 8080;

const loadEnv = require("./env");
const env = loadEnv();

connect(env.MONGO_URI, {
  useNewUrlParser: true,
  user: env.MONGO_USER,
  pass: env.MONGO_PASSWORD,
})
  .then(() => {
    console.log("Database is connected");
    console.log("Initializing server");
    app.use(cors());

    app.get("/", (req, res) => res.send("Hello from homepage."));

    app.listen(port, () =>
      console.log(`Server Running on port: http://localhost:${port}`)
    );

    app.use("/user", userRouter);
    app.use("/product", productRouter);
  })
  .catch((err) => console.log("Error connecting to mongo", err));
