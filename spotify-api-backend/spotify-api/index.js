const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
// app.use(express.static(__dirname + '/public'));

let songPlaylist = [
  {
    id    : 1,
    title : "Be Happy",
    artist : [{name : "Annonym"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a"
  },
  {
    id    : 2,
    title : "Be Happy 2",
    artist : [{name : "Annonym 2"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a"
  },
  {
    id    : 3,
    title : "Be Happy 3",
    artist : [{name : "Annonym 3"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a"
  },
];

app.get('/', (req, res) => {
  res.send('Welcome to Spotify Apps');
});

app.get('/songs', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(songPlaylist);
});

app.post('/songs', (req, res) => {
  const id = songPlaylist.length+1;
  const title = req.body.title;
  const artist = req.body.artist;
  const url = req.body.url;

  songPlaylist.push({id:id, title:title, artist:artist, url:url});

  res.send("Create Songs Succesfully");
});

app.put("/songs/:id", (req, res) => {
  const songIndex = songPlaylist.findIndex(
    (song) => song.id === parseInt(req.params.id)
  );
  
  songPlaylist[songIndex] = { id: songPlaylist[songIndex].id, ...req.body };
  res.send(songPlaylist[songIndex]);
});

app.delete("/songs/:id", (req, res) => {
  const songIndex = songPlaylist.findIndex(
    (song) => song.id === parseInt(req.params.id)
  );
  
  res.send(songPlaylist.splice(songIndex, 1)[0]);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});