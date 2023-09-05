const BadgeType = require("../models/BadgeType.model");

const addBadgeType = async (req, res, next) => {
  try {
    const { badgeName, badgeDescription, badgeImg } = req.body;

    const newBType = new BadgeType({
      badgeName,
      badgeDescription,
      badgeImg,
    });

    await newBType.save();

    res.status(201).json({ btype: newBType });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBadgeType = async (req, res, next) => {
  try {
    const btype = await BadgeType.find();
    if (!btype || btype.length === 0) {
      throw new Error("btype not found!");
    }
    res.status(200).json(btype);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBadgeType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const btype = await BadgeType.findById(id);
    if (!btype) {
      throw new Error("btype not found!");
    }
    await BadgeType.findByIdAndDelete(id);
    res.status(200).json({ message: "btype deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addBadgeType,
  getBadgeType,
  deleteBadgeType,
};
