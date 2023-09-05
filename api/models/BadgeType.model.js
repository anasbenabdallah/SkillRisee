const mongoose = require("mongoose");

const badgeTypeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    badgeName: String,
    badgeDescription: String,
    badgeImg: String,
    Etat: Boolean,
  },
  { timestamps: true }
);

const BadgeType = mongoose.model("BadgeType", badgeTypeSchema);

module.exports = BadgeType;
