import mongoose from "mongoose";
import normalize from "normalize-mongoose";
const { Schema, model } = mongoose;

const Ticket = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  hall: { type: Schema.Types.ObjectId, ref: "Hall" },
  seat: String,
  seatNumber: Number,
  price: Number,
  pos: {
    row: Number,
    seat: Number,
  },
});

Ticket.plugin(normalize);

export default model("Ticket", Ticket);
