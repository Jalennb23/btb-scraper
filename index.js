import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "✅ BTB Scraper is running" });
});

app.get("/odds", async (req, res) => {
  try {
    res.json([
      {
        home_team: "Yankees",
        away_team: "Red Sox",
        bookmakers: [
          {
            markets: [
              {
                outcomes: [
                  { name: "Yankees", price: 1.91 },
                  { name: "Red Sox", price: 1.95 }
                ]
              }
            ]
          }
        ]
      }
    ]);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
