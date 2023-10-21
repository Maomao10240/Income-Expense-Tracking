const userRoute = require("./routes/users/usersRoute");
const express = require("express");
const accoutsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
require("./config/dbConnect");
const globalErrHandler = require("./middlewares/globalErrHandler");

const app = express();
//middlewares Pass incoming data
app.use(express.json());
// Routes
// user
app.use("/api/users", userRoute);

//Accounts
app.use("/api", accoutsRoute);

//Transactions
app.use("/api/transactions", transactionsRoute);

//Error handlers
app.use("*", (req, res, next) => {
  return next(new Error("route not found"));
  // res.status(404).json({ message: "route not found" });
  //   return new Error("Rout not found");
  //   next();
});

app.use(globalErrHandler);
// Listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running, ${PORT}`));
