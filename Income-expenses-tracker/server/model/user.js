const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    hasAccount: {
      type: Boolean,
      default: false,
    },
    accounts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
