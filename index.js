import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Example route: fetch odds from Bovada JSON feed
app.get("/bovada", async (req, res) => {
  try {
    const response = await fetch("https://www.bovada.lv/services/sports/event/v2/events/A/description/baseball/mlb");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching Bovada odds:", err);
    res.status(500).json({ error: "Failed to fetch Bovada odds" });
  }
});

// Example route: fetch odds from BetOnline (stub for now)
app.get("/betonline", async (req, res) => {
  try {
    // placeholder, since BetOnline may require HTML scraping
    res.json({ message: "BetOnline scraper coming soon" });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch BetOnline odds" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.json({ message: "✅ BTB Scraper is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
