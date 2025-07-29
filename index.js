import fetch from "node-fetch";

const ODDS_API_KEY = process.env.ODDS_API_KEY; // ✅ stored in Railway variables

async function fetchOdds() {
  try {
    const url = `https://api.the-odds-api.com/v4/sports/upcoming/odds?regions=us,eu,uk,au&markets=h2h,spreads,totals&oddsFormat=american`;

    const res = await fetch(url, {
      headers: { "x-api-key": ODDS_API_KEY }
    });

    if (!res.ok) {
      console.error("❌ OddsAPI failed:", res.status, await res.text());
      return;
    }

    const data = await res.json();
    console.log("✅ Got odds:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("⚠️ Error fetching odds:", err);
  }
}

fetchOdds();
