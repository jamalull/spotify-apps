const { listSongs, findSongById } = require("../models/songs.model");

const getListSong = () => {
  const songData = listSongs();

  if(songData == null) {
    throw {
      type : "data-not-found",
      message : "Cannot get songs",
    };
  }

  return songData;
}

const getSongById = (id) => {

  const songData = findSongById(id);

  if(songData == null) {
    throw {
      type : "data-not-found",
      message : "Cannot find songs by id, Please check songs id",
    };
  }

  const song = songData.title;

  return song;
};

module.exports = { getListSong, getSongById };