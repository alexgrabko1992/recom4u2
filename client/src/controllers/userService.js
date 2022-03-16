class userService {
  async createUser(email, role) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/user/create-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            email,
            role,
          }),
        }
      );
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.log(error);
    }
  }
  async getUser(email) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/user/get-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new userService();
