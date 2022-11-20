const mongoose = require("mongoose");

const scoreboard = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: String },
  scoreDirection: { type: String, enum: ["ASC", "DESC"] },
  results_ids: { type: Array },
});

module.exports = mongoose.model("scoreboard", scoreboard);
