const HallModel = require("../models/hall-model");

class HallService {
  getAll() {
    return HallModel.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return HallModel.findById(id);
  }

  update(hall) {
    if (!hall._id) {
      throw new Error("id не указан");
    }
    return HallModel.findByIdAndUpdate(hall._id, hall, { new: true });
  }
}

module.exports = new HallService();
