const mongoose = require("mongoose");

const scoreboardResult = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  points: { type: Number, required: true },
  scoreboard_id: { type: String, required: true },
});

module.exports = mongoose.model("scoreboardResult", scoreboardResult);
