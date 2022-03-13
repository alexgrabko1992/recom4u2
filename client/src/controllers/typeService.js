class typeService {
  async createType(name) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/type/create-type`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            name,
          }),
        }
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  }
  async getTypes() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/type/get-type`
      );
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new typeService();
