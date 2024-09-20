import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/webhook", (req, res) => {
  const { challenge } = req.body;

  if (challenge) {
    res.status(200).json({ challenge });
    console.log("Webhook handshake successful:", challenge);
  } else {
    res.status(400).json({ error: "Bad Request: Challenge missing" });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});


app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});