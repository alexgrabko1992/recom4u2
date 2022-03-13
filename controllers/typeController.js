const { Type } = require("../models/models");

class TypeController {
  async createType(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    res.json(type);
  }
  async getType(req, res) {
    const types = await Type.findAll();
    res.json(types);
  }
}

module.exports = new TypeController();
