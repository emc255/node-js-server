const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const HomeRoutes = require("./routes/homeRoute");
const BlogRoutes = require("./routes/BlogRoute");
const AboutRoutes = require("./routes/AboutRoute");
const ErrorRoutes = require("./routes/errorRoute");

// server using express package with rendering (ejs)
const app = express();
const DB_URL = process.env.DB_HOST;

// connect to mongodb
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connect");
    app.listen(4000);
  })
  .catch((err) => {
    throw err;
  });

// register view engine
app.set("view engine", "ejs");

// default ejs will look for views folder
// custumize the folder views
//app.set("views", "ejs-views");

//middleware and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Home Routes
app.use(HomeRoutes);
//Blog Routes
app.use("/blogs", BlogRoutes);

//About Routes
app.use(AboutRoutes);

// error page
app.use(ErrorRoutes);
