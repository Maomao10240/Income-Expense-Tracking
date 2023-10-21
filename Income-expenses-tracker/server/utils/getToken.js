const getToken = (req) => {
  const headerObj = req.headers;
  const token = headerObj["authorization"].split(" ")[1];
  if (token != undefined) {
    // console.log(token);
    return token;
  } else {
    return {
      status: "failed",
      message: "There is no token attached",
    };
  }
};

module.exports = getToken;
