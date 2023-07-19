const express = require("express");

// ROUTES
const songsRoute = require("./routes/songs.route");

const app = express();

app.use(express.json());

app.use("/songs", songsRoute);

const listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});
