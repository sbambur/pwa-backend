import SessionService from "../service/session-service.js";

class SessionController {
  async getAll(_, res) {
    try {
      const sessions = await SessionService.getAll();
      return res.json(halls);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const session = await SessionService.getOne(req.params.id);
      return res.json(hall);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new SessionController();
