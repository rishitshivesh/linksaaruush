class ErrorHandler extends Error {
  constructor(errorCode, errorMessage) {
    super();
    this.message = errorMessage;
    this.code = errorCode;
  }
}

const handleErrors = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.code).json({
      status: "ERROR",
      error: err.message,
    });
  } else {
    console.log(err);
    res.status(500).json({
      status: "ERROR",
      error: "Internal Server Error.",
    });
  }
};

module.exports = {
  ErrorHandler,
  handleErrors,
};
