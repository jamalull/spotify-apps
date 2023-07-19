const express = require("express");

const { showListSong ,getSong } = require("../controllers/songs.controller");

const router = express.Router();

router.get("/", (req, res) => {

  try {
    const songsListResponse = showListSong();
    res.send(songsListResponse);
    // console.log(songsListResponse);

  } catch (err) {
    res.status(400).send(err);
  }

});

router.get("/:id", (req, res) => {

  try {
    const songsResponse = getSong(req.params.id);
    res.send(songsResponse);

  } catch (err) {
    res.status(400).send(err);
  }

});

module.exports = router;