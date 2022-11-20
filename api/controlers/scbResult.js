const scbRSchema = require("../models/scbResult");
const scbSchema = require("../models/scoreboard");

module.exports.CREATE_SCORE = function (req, res) {
  const task = new scbRSchema({
    title: req.body.title,
    points: req.body.points,
    scoreboard_id: req.body.scoreboard_id,
  });

  task.save().then((result) => {
    scbSchema
      .updateOne(
        { id: req.body.scoreboard_id },
        { $push: { results_ids: result._id.toString() } }
      )
      .exec();

    return res.status(200).json({
      statusMessage: "task was inserted successfully",
      result: result,
    });
  });
};

module.exports.GET_ALL_RESULTS = function (req, res) {
  scbRSchema.find().then((results) => {
    return res.status(200).json({ results: results });
  });
};

module.exports.EDIT_SCORE_TITLE = (req, res) => {
  console.log(req.params.id);
  scbRSchema
    .updateOne({ _id: req.params.id }, { title: req.body.editedName })
    .then((result) => {
      res
        .status(200)
        .json({ statusMessage: "Eddited successfully", editedName: result });
    });
};

module.exports.GET_SCOREBOARD_BY_ID_RESULTS = async (req, res) => {
  let fff = 0;
  const currentScb = await scbSchema.findOne({ _id: req.params.id }).exec();
  if (currentScb.scoreDirection === "ASC") {
    fff = 1;
  } else {
    fff = -1;
  }
  // console.log(currentScb.scoreDirection);
  // console.log(fff);

  scbRSchema
    .find({ scoreboard_id: req.params.id })
    .sort({ points: fff })
    .then((results) => {
      return res.status(200).json({ results_ids: results });
    });
};

// For own use-------------------------------------------------
module.exports.DELETE_RESULTS = async function (req, res) {
  const resultFromDb = await scbRSchema.deleteMany().exec();

  return res.status(200).json({
    statusMessage: "Item was deleted sucessfuly",
    deletedItem: resultFromDb,
  });
};
