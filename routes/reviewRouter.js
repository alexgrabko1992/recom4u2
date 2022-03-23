const Router = require("express");
const router = new Router();
const reviewController = require("../controllers/reviewController");

router.get("/get-review", reviewController.getReview);
router.post("/upload", reviewController.uploadPhoto);
router.post("/create-review", reviewController.createReview);
router.post("/my-reviews", reviewController.getMyReviews);
router.post("/delete-review", reviewController.deleteReview);
router.post("/update-review", reviewController.updateReview);
router.post("/set-rate", reviewController.setUserRating);
router.post("/get-rates", reviewController.getUserRating);

module.exports = router;
