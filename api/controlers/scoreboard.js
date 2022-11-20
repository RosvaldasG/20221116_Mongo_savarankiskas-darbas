const scbSchema = require("../models/scoreboard");

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const task = new scbSchema({
    name: req.body.name,
    dateCreated: new Date(),
    scoreDirection: req.body.scoreDirection,
    results_ids: [],
  });

  task.save().then((result) => {
    return res.status(200).json({
      statusMessage: "task was inserted successfully",
      Scoreboard: result,
    });
  });
};

module.exports.GET_ALL_SCOREBOARDS = function (req, res) {
  scbSchema.find().then((results) => {
    return res.status(200).json({ Scoreboards: results });
  });
};

module.exports.GET_SCOREBOARD_BY_ID = function (req, res) {
  scbSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ Scoreboard: results });
  });
};

module.exports.DELETE_SCOREBOARD = async function (req, res) {
  const resultFromDb = await scbSchema.deleteMany().exec();

  return res.status(200).json({
    statusMessage: "Item was deleted sucessfuly",
    deletedItem: resultFromDb,
  });
};

module.exports.EDIT_SCOREBOARD_NAME = (req, res) => {
  // console.log(req.params.id);
  scbSchema
    .updateOne({ _id: req.params.id }, { name: req.body.editedName })
    .then((result) => {
      res
        .status(200)
        .json({ statusMessage: "Eddited successfully", editedName: result });
    });
};

module.exports.CHANGE_SCOREBOARD_DIRECTION = async (req, res) => {
  const currentScb = await scbSchema.findOne({ _id: req.params.id }).exec();
  if (currentScb.scoreDirection === "ASC") {
    currentScb.scoreDirection = "DESC";
  } else {
    currentScb.scoreDirection = "ASC";
  }
  scbSchema
    .updateOne(
      { _id: req.params.id },
      { scoreDirection: currentScb.scoreDirection }
    )
    .then((result) => {
      return res
        .status(200)
        .json({ statusMessage: "Eddited successfully", editedScb: result });
    });
};
