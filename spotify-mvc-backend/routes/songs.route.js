const express = require("express");

const { showListSongController, showSongByIdController, sortSongController } = require("../controllers/songs.controller");

const router = express.Router();

router.get("/", (req, res) => {

  try {
    const songsListResponse = showListSongController();
    res.send(songsListResponse);
    // console.log(songsListResponse);

  } catch (err) {
    res.status(400).send(err);
  }

});

router.get("/sort", (req, res) => {

  try {
    
    const sortSongsResponse = sortSongController();
    res.send(sortSongsResponse);

  } catch (err) {
    res.status(400).send(err);
  }

});

router.get("/:id", (req, res) => {

  try {
    const songsResponse = showSongByIdController(req.params.id);
    res.send(songsResponse);

  } catch (err) {
    res.status(400).send(err);
  }

});

module.exports = router;