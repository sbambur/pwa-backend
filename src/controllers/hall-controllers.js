const HallService = require("../service/hall-service");

class HallController {
  async getAll(_, res) {
    try {
      const halls = await HallService.getAll();
      return res.json(halls);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const hall = await HallService.getOne(req.params.id);
      return res.json(hall);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedHall = await HallService.update(req.body);
      return res.json(updatedHall);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new HallController();
