require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: process.env.REACT_DEV_SERVER,
};

const app = express();
const { handleErrors } = require("./helpers/errorHandler");

const { linkRoutes } = require("./routes/links");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "maintainance") {
  app.use("*", (req, res) => {
    res.sendStatus(503);
  });
} else if (process.env.NODE_ENV === "development") {
  app.use(cors(corsOptions));
}

app.use("/api", linkRoutes);

if (process.env.NODE_ENV === "production") {
  express.static(path.join(__dirname, "client", "build"));
  app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use(handleErrors);

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("Connected To MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server Listening on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
