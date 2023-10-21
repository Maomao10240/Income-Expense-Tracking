const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      enum: ["Income", "Expenses"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Savings",
        "Investment",
        "Checking",
        "Credit Card",
        "Loan",
        "Personal",
        "Uncategorized",
      ],
      required: true,
    },
    color: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    notes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const transaction = mongoose.model("transaction", transactionSchema);
module.exports = transaction;
