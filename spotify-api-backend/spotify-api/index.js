const express = require('express')
const app = express()
const port = 3000

const song = [
  {
    title : "Be Happy",
    artist : [{name : "Annonym"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a"
  },
  {
    title : "Be Happy 2",
    artist : [{name : "Annonym"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a"
  },
  {
    title : "Be Happy 3",
    artist : [{name : "Annonym"}],
    url : "https://open.spotify.com/track/4SGQ9TT7NTUAMnYvuwsWfW?si=99ffbc2b277d423a"
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})