const express = require("express");
const path = require("path");

const app = express();

// serve i file html
app.use("/transcripts", express.static(path.join(__dirname, "transcripts")));

app.get("/", (req, res) => {
  res.send("Transcript server online");
});

app.listen(3000, () => {
  console.log("🌐 Web server attivo su porta 3000");
});