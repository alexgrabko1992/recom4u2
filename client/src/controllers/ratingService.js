class ratingService {
  async setRate(userRating, userId, reviewId) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/review/set-rate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            userRating,
            userId,
            reviewId,
          }),
        }
      );
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.log(error);
    }
  }
  async getRate(reviewId) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/review/get-rates`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            reviewId,
          }),
        }
      );
      const jsonResponse = await response.json();
      return jsonResponse.map((e) => e.userRating);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ratingService();
