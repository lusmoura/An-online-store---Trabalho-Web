const { connect } = require("mongoose");
const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

const app = express();

app.use(express.json());

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

    app.listen(env.API_PORT, () =>
      console.log(`Server Running on port: http://localhost:${env.API_PORT}`)
    );

    app.use("/user", userRouter);
    app.use("/product", productRouter);
  })
  .catch((err) => console.log("Error connecting to mongo", err));
