class AppErr extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = "failed";
  }
}
const appErr = (message, statusCode) => {
  const error = new Error(message);
  error.status = statusCode;
  return error;
};
module.exports = {
  AppErr,
  appErr,
};
