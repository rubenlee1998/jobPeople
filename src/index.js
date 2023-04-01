import express from "express";

const PORT = 7000;

const app = express();

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT}/ 🚀`);

app.get("/", (req, res) => {
  res.render(__dirname + "index.html");
});

app.listen(PORT, handleListening);
