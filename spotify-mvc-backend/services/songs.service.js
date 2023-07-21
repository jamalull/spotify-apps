const { listSongs, findSongById, sortSongs } = require("../models/songs.model");

const listSongService = () => {
  const listSongData = listSongs();

  if(listSongData == null) {
    throw {
      type : "data-not-found",
      message : "Cannot get songs",
    };
  }

  return listSongData;
};

const sortSongService = () => {
  const sortSongData = sortSongs();

  if(sortSongData == null) {
    throw {
      type : "data-not-found",
      message : "Cannot get songs",
    };
  }

  return sortSongData;
};

const songByIdService = (id) => {

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

module.exports = { listSongService, songByIdService, sortSongService };