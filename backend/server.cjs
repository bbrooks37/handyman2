const express = require("express");
const cors = require("cors"); // Import the cors middleware
const { Pool } = require("pg");

const app = express();
const port = 5000; // Choose a port for your backend API

const pool = new Pool({
  user: "postgres", // Use 'postgres' if connected as that user
  host: "localhost", // Or 127.0.0.1
  database: "hm_database",
  password: "Planthigh37", // Replace with your postgres password
  port: 5432,
});

app.use(cors()); // Use the cors middleware
app.use(express.json()); // To parse JSON request bodies

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.get("/api/services", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Error fetching services" });
  }
});

app.get("/api/mulching", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM mulching");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching mulching services:", error);
    res.status(500).json({ error: "Error fetching mulching services" });
  }
});

app.get("/api/moving", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM moving");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching moving services:", error);
    res.status(500).json({ error: "Error fetching moving services" });
  }
});

app.get("/api/handy_services", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM handy_services");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching handy services:", error);
    res.status(500).json({ error: "Error fetching handy services" });
  }
});

// Add more API routes for creating, updating, and deleting services as needed

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});