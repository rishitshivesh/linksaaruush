const { hash, compare } = require("bcryptjs");
const { adminModel } = require("../models/admin");
const { ErrorHandler } = require("../helpers/errorHandler");
const { sign } = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      throw new ErrorHandler(400, "Invalid Request. Missing Parameters.");
    }
    const isThere = await adminModel.findOne({
      username: req.body.username,
    });
    if (isThere) {
      throw new ErrorHandler(400, "Username already exists.");
    }
    const hashedPassword = await hash(req.body.password, 12);
    const admin = new adminModel({
      username: req.body.username,
      password: hashedPassword,
    });
    const result = await admin.save();
    if (result) {
      res.status(200).json({
        status: "OK",
      });
    } else {
      throw new ErrorHandler(500, "Internal Server Error.");
    }
  } catch (error) {
    if (error instanceof ErrorHandler) {
      next(error);
    } else {
      console.log(error);
      next(new ErrorHandler(500, "Internal Server Error."));
    }
  }
};

const login = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      throw new ErrorHandler(400, "Invalid Request. Missing Parameters.");
    }
    const userExists = await adminModel.findOne({
      username: req.body.username,
    });
    if (!userExists) {
      throw new ErrorHandler(403, "Username or Password Wrong.");
    }
    const passwordMatch = await compare(req.body.password, userExists.password);
    if (!passwordMatch) {
      throw new ErrorHandler(403, "Username or Password Wrong.");
    }
    const userJwt = await sign(
      { username: userExists.username },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
        issuer: "team-envision",
      }
    );
    if (userJwt) {
      res.status(200).json({
        status: "OK",
        authToken: userJwt,
      });
    } else {
      throw new ErrorHandler(500, "Internal Server Error.");
    }
  } catch (error) {
    if (error instanceof ErrorHandler) {
      next(error);
    } else {
      console.log(error);
      next(new ErrorHandler(500, "Internal Server Error."));
    }
  }
};

module.exports = {
  register,
  login,
};
