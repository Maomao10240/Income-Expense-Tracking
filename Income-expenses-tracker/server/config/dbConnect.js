const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://maohua:88273189pmh*M@cluster0.gvwlkrm.mongodb.net/income-app?retryWrites=true&w=majority"
    );
    console.log("db Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
dbConnect();
