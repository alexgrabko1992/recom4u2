const Router = require("express");
const router = new Router();
const reviewRouter = require("./reviewRouter");
const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter")

router.use("/user", userRouter);
router.use("/review", reviewRouter);
router.use("/type", typeRouter)

module.exports = router;
