require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

//connect DB
const connectDB = require("./db/connect");
//Routers
const authRouter = require("./routes/auth");

app.use(express.json());

//app routes
app.use("/", authRouter);

const port = 5000;

const start = async () => {
  try {
    await connectDB(); // connect DB
    app.listen(port, console.log(`server is listning to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
