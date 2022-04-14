const { Schema, model } = require("mongoose");

const Seat = new Schema({
  seatNumber: { type: Number, required: true },
  price: { type: Number, required: true },
  reserved: { type: Boolean, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  pos: {
    row: { type: Number, required: true },
    seat: { type: Number, required: true },
  },
});

const Hall = new Schema({
  title: { type: String, required: true },
  reserved: { type: Boolean, required: true },
  active: { type: Boolean, required: true },
  date: Date,
  movie: {
    id: String,
    title: String,
    overview: String,
    release_date: String,
    poster_path: String,
    backdrop_path: String,
  },
  seats: [Seat],
});

module.exports = model("Hall", Hall);
