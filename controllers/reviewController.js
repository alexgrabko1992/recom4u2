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
}

module.exports = new ReviewController();
