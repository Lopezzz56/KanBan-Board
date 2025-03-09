require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Allow frontend (Vite) to access API
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// ✅ Connect to MongoDB (Remove deprecated options)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Define Mongoose Schema
const CardSchema = new mongoose.Schema({
  title: String,
  description: String,
  column: String,
});

const Card = mongoose.model("Card", CardSchema);

// ✅ Routes
app.get("/cards", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

app.post("/cards", async (req, res) => {
  const { title, description, column } = req.body;
  const newCard = new Card({ title, description, column });
  await newCard.save();
  res.json(newCard);
});

// Update task column (drag and drop)
app.put("/cards/:id", async (req, res) => {
  try {
    const { column } = req.body;
    const updatedTask = await Card.findByIdAndUpdate(
      req.params.id,
      { column },
      { new: true } // Ensure the updated task is returned
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task column" });
  }
});



app.delete("/cards/:id", async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: "Card deleted" });
});

// ✅ Change Port to `5000` (Avoid Vite Conflict)
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
