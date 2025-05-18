import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

// POST route to receive patient registration data
app.post("/patients", (req, res) => {
  const patientData = req.body;

  console.log("Received patient data:", patientData);

  // You can add DB saving logic here if needed

  res.status(201).json({ message: "Patient registered successfully!" });
});

// Optional: a GET route for testing
app.get("/patients", (req, res) => {
  res.json({ message: "GET patients route working" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
