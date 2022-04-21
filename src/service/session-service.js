import Session from "../models/session-model.js";

class SessionService {
  getAll() {
    return Session.find();
  }

  getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return Session.findById(id);
  }
}

export default new SessionService();
