class reviewService {
  async uploadToStorage(base64) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/review/upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ data: base64 }),
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  async createReview(title, info, img, rating, userId, typeId) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/review/create-review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          title,
          info,
          img,
          rating,
          userId,
          typeId,
        }),
      }
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  }
  async getReviews() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/review/get-review`
      );
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new reviewService();
