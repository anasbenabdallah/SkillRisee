const express = require("express");
const router = express.Router();
// ==============================|| Imported routes ||============================== //
const authRouter = require("./auth.user.router");
const userRouter = require("./user.router");
const swaggerRouter = require("./swagger.router");
const facerecogRouter = require("./facerecog.router");
const adminRouter = require("./admin.router");
const SocialMediaPostRouter = require("./SocialMediaPost.router");
const ChallengeRouter = require("./Challenge.router");
const companyRouter = require("./company.router");
const jobRouter = require("./job.router");
const conversationRouter = require("./conversation.router");
const MessageRouter = require("./messages.router");
const stripeRouter = require("./stripe.router");
const BadgeTypeRouter = require("./BadgeType.router");
const CategoryRouter = require("./Category.router");
const CommentRouter = require("./comment.router");

router.use("/job", jobRouter);
router.use("/auth", authRouter);
router.use("/", userRouter);
router.use("/company", companyRouter);
router.use("/api-docs", swaggerRouter);
router.use("/facerecog", facerecogRouter);
router.use("/admin", adminRouter);
router.use("/post", SocialMediaPostRouter);
router.use("/challenge", ChallengeRouter);
router.use("/conversation", conversationRouter);
router.use("/messages", MessageRouter);
router.use("/stripe", stripeRouter);
router.use("/badgeType", BadgeTypeRouter);
router.use("/category", CategoryRouter);
router.use("/comment", CommentRouter);

module.exports = router;
