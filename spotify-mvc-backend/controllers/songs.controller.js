const { getListSong, getSongById } = require("../services/songs.service");

const showListSong = () => {
  try {
    const listSong = getListSong();

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

const getSong = (id) => {

  try {
    const songTitle = getSongById(id);

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

module.exports = { showListSong, getSong };