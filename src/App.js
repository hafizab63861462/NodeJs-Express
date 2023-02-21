const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { json } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const toDoRoutes = require("./../src/routes/toDoRoutes");

dotenv.config({ path: "./config.env" });

mongoose.set("strictQuery", true);

//Code to Connect Data Base Server

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connection Successful!");
  });

//This Code is used to connect local data base

// mongoose
//   .connect(process.env.DATABASE_LOCAL, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("DB Connection Successful!");
//   });

const app = express();
app.use(bodyParser.json());
app.use("/", toDoRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
