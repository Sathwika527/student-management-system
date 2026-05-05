const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// GET
app.get("/", (req, res) => {
  res.send("Team Task Manager API is running 🚀");
});
// POST
app.post("/tasks", (req, res) => {
  tasks.push({
    id: Date.now(),
    title: req.body.title,
    status: "pending",
    assignedTo: req.body.assignedTo
  });
  res.json({ message: "Task created" });
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});