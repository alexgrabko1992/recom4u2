const { User } = require("../models/models");

class UserController {
  async createUser(req, res) {
    const { email, role } = req.body;
    const user = await User.create({ email, role });
    res.json(user);
  }
  async getUser(req, res) {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    res.json(user);
  }
}

module.exports = new UserController();
