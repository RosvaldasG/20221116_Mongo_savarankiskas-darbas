const express = require("express");
const bodyParser = require("body-parser");
const scoreboardRoutes = require("./api/routes/scoreboard");
const scbResultRoutes = require("./api/routes/scbResult");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => {
    console.log("xxxxxxxxxxxxxxxxxx");
    console.log(err);
  });

app.use(scoreboardRoutes);
app.use(scbResultRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

console.log("Hello !!!");

app.listen(3000);
