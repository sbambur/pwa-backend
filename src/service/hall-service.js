import HallModel from "../models/hall-model.js";

class HallService {
  getAll() {
    return HallModel.find();
  }

  getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return HallModel.findById(id);
  }

  update(hall) {
    if (!hall.id) {
      throw new Error("id не указан");
    }
    return HallModel.findByIdAndUpdate(hall.id, hall, { new: true });
  }
}

export default new HallService();
