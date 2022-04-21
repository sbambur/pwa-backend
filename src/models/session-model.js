import mongoose from "mongoose";
import normalize from "normalize-mongoose";
const { Schema, model } = mongoose;

const Session = new Schema({
  hall: { type: Schema.Types.ObjectId, ref: "HallSchema" },
  active: { type: Boolean, required: true },
  date: Date,
  movie: {
    id: Number,
    title: String,
    runtime: Number,
    vote_average: Number,
    overview: String,
    genres: Schema.Types.Mixed,
    release_date: String,
    poster_path: String,
    backdrop_path: String,
  },
});

Session.plugin(normalize);

export default mongoose.model("Session", Session);
