const { Review } = require("../models/models");
const imgbbUploader = require("imgbb-uploader");

class ReviewController {
  async uploadPhoto(req, res) {
    const options = {
      apiKey: process.env.IMGBB_API_KEY,
      base64string: req.body.data,
    };
    imgbbUploader(options)
      .then((response) => res.json(response))
      .catch((error) => console.error(error));
  }
  async createReview(req, res) {
    const { title, info, rating, img, userId, typeId } = req.body;
    const review = await Review.create({
      title,
      info,
      rating,
      img,
      userId,
      typeId,
    });
    res.json(review);
  }
  async getReview(req, res) {
    const reviews = await Review.findAll();
    res.json(reviews);
  }
  async getMyReviews(req, res) {
    const { userId } = req.body;
    const reviews = await Review.findAll({ where: { userId } });
    res.json(reviews);
  }
  async deleteReview(req, res) {
    const { id } = req.body;
    const response = await Review.destroy({ where: { id } });
    res.json("Review was deleted");
  }
  async updateReview(req, res) {
    const { title, info, rating, typeId, reviewId } = req.body;
    const review = await Review.findOne({ where: { id: reviewId } });
    const response = await review.update({ title, info, rating, typeId });
    res.json(response);
  }
}

module.exports = new ReviewController();
