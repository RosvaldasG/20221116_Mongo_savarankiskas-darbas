const express = require("express");
const router = express.Router();
const {
  CREATE_SCORE,
  EDIT_SCORE_TITLE,
  DELETE_RESULTS,
  GET_ALL_RESULTS,
  GET_SCOREBOARD_BY_ID_RESULTS,
} = require("../controlers/scbResult");

router.post("/createScore", CREATE_SCORE);

router.put("/editTitle/:id", EDIT_SCORE_TITLE);

router.delete("/deleteResults", DELETE_RESULTS);

router.get("/getAllResults", GET_ALL_RESULTS);

router.get("/getAllResultsByscoreboard/:id", GET_SCOREBOARD_BY_ID_RESULTS);

module.exports = router;
