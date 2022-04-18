import mongoose from "mongoose";
import normalize from "normalize-mongoose";
const { Schema, model } = mongoose;

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

Seat.plugin(normalize);

const Hall = new Schema({
  title: { type: String, required: true },
  reserved: { type: Boolean, required: true },
  active: { type: Boolean, required: true },
  date: Date,
  movie: {
    id: Number,
    title: String,
    runtime: Number,
    vote_average: Number,
    overview: String,
    genres: Array,
    release_date: String,
    poster_path: String,
    backdrop_path: String,
  },
  seats: [Seat],
});

Hall.plugin(normalize);

export default model("Hall", Hall);
