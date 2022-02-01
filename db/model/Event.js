const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  organizer: { type: String },
  name: { type: String },
  email: { type: String },
  image: { type: String },
  numOfSeats: { type: Number },
  bookedSeats: { type: Number },
  startDate: { type: Date },
  endDate: { type: Date },
});

module.exports = mongoose.model("Event", EventSchema);
