let songPlaylist = [
  {
    id    : 1,
    title : "Be Happy 1",
    artist : [{name : "Annonym 1"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a",
    playedCount : 4
  },
  {
    id    : 2,
    title : "Be Happy 2",
    artist : [{name : "Annonym 2"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a",
    playedCount : 8
  },
  {
    id    : 3,
    title : "Be Happy 3",
    artist : [{name : "Annonym 3"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a",
    playedCount : 15
  },
];

const listSongs = () => {
  return songPlaylist;
};

const findSongById = (id) => {
  return songPlaylist.find((song) => song.id == id);
};

module.exports = { listSongs, findSongById };