const mongoose = require("mongoose");
const User = require("./user.model");
const Company = require("./company.model");

const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Company,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    //the number of stars of the user who put the review
    star: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
