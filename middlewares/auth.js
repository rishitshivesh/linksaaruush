const {
  verify,
  JsonWebTokenError,
  TokenExpiredError,
} = require("jsonwebtoken");
const { ErrorHandler } = require("../helpers/errorHandler");
const { promisify } = require("util");

const verifyUser = async (req, res, next) => {
  try {
    if (!/^Bearer .+$/.test(req.get("authorization"))) {
      throw new ErrorHandler(403, "Login Credentials Invalid");
    }
    const authToken = req.get("authorization").split(" ")[1];
    const jwtVerify = promisify(verify);
    const verifyStatus = await jwtVerify(
      authToken,
      process.env.JWT_SECRET_KEY,
      {
        issuer: "team-envision",
      }
    );
    if (verifyStatus) {
      next();
    } else {
      next(new ErrorHandler(403, "Forbidden."));
    }
  } catch (error) {
    if (
      error instanceof JsonWebTokenError ||
      error instanceof TokenExpiredError
    ) {
      next(new ErrorHandler(403, "JSON Webtoken Error."));
    } else if (error instanceof ErrorHandler) {
      next(error);
    } else {
      next(new ErrorHandler(500, "Internal Server Error."));
    }
  }
};

module.exports = {
  verifyUser,
};
