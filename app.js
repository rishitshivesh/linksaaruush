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
const { adminRoutes } = require("./routes/admin");

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
app.use("/api/admin", adminRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.use("/*", (req, res, next) => {
    try {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    } catch (error) {
      next(error);
    }
  });
}

app.use(handleErrors);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected To MongoDB");
    const port = process.env.PORT ? process.env.PORT : 4201;
    app.listen(port, () => {
      console.log(`Server Listening on Port ${port}`);
    });
  })
  .catch((err) => console.log(err));
