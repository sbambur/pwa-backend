import TicketModel from "../models/ticket-model.js";

class TicketService {
  saveTicket(ticketsRes) {
    return ticketsRes.map(async (oneTicket) => {
      return await TicketModel.create(oneTicket);
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return TicketModel.findByIdAndDelete(id);
  }

  getAll(userId) {
    return TicketModel.find({ user: userId });
  }
}

export default new TicketService();
