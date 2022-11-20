const express = require("express");
const router = express.Router();
const {
  CREATE_SCOREBOARD,
  DELETE_SCOREBOARD,
  EDIT_SCOREBOARD_NAME,
  GET_ALL_SCOREBOARDS,
  GET_SCOREBOARD_BY_ID,

  CHANGE_SCOREBOARD_DIRECTION,
} = require("../controlers/scoreboard");

router.post("/createScoreboard", CREATE_SCOREBOARD);

router.delete("/deleteScb", DELETE_SCOREBOARD);

router.put("/editScoreboardName/:id", EDIT_SCOREBOARD_NAME);

router.put("/changeScbDirection/:id", CHANGE_SCOREBOARD_DIRECTION);

router.get("/getAllScoreboards", GET_ALL_SCOREBOARDS);

router.get("/getScoreboardById/:id", GET_SCOREBOARD_BY_ID);

module.exports = router;
