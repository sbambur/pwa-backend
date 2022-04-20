import TicketService from "../service/ticket-servise.js";

class TicketController {
  async create(req, res) {
    try {
      const tickets = await TicketService.saveTicket(req.body);
      res.json(tickets);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const ticket = await TicketService.delete(req.params.id);
      return res.json(ticket);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const tickets = await TicketService.getAll(req.params.id);
      return res.json(tickets);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new TicketController();
