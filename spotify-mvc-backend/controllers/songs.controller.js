const { listSongService, songByIdService, sortSongService } = require("../services/songs.service");

const showListSongController = () => {
  try {
    const listSong = listSongService();

    return {
      status : "success",
      data : {
        listSong,
      },
    };
  } catch (e) {
    throw e;
  }
};

const sortSongController = () => {
  try {
    const sortSong = sortSongService();

    return {
      status : "success",
      data : {
        sortSong,
      },
    };
  } catch (e) {
    throw e;
  }
};

const showSongByIdController = (id) => {

  try {
    const songTitle = songByIdService(id);

    return {
      status : "success",
      data : {
        songTitle,
      },
    };
  } catch (e) {
    throw e;
  }
};

module.exports = { showListSongController, showSongByIdController, sortSongController };