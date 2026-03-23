const express = require("express");
const path = require("path");

const app = express();

// 🔥 serve la cartella transcripts
app.use("/transcripts", express.static(path.join(__dirname, "transcripts")));

// homepage
app.get("/", (req, res) => {
  res.send("✅ Transcript server online!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server avviato su porta ${PORT}`);
});
