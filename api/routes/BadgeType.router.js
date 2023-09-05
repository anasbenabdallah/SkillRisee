const express = require("express");
const BadgeTypeRouter = express.Router();

const {
  addBadgeType,
  getBadgeType,
  deleteBadgeType,
} = require("../controllers/BadgeType.controllers");
// Require authentication middleware
const {
  authenticateToken,
} = require("../middlewares/authenticateToken.middleware");

BadgeTypeRouter.post("/add", authenticateToken, addBadgeType);
BadgeTypeRouter.get("/badgeTypes", getBadgeType);
BadgeTypeRouter.delete("/:id", deleteBadgeType);

module.exports = BadgeTypeRouter;
