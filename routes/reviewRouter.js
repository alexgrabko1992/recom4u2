const Router = require("express");
const router = new Router();
const reviewController = require("../controllers/reviewController");

router.post("/upload", reviewController.uploadPhoto);
router.post("/create-review", reviewController.createReview);
router.get("/get-review", reviewController.getReview);

module.exports = router;
