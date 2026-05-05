const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

/* ✅ MySQL CONNECTION */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // 🔴 change this
  database: "task_manager"
});

db.connect((err) => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

/* ✅ TEST ROUTE */
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

/* ✅ GET ALL TASKS */
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching tasks");
    }
    res.json(result);
  });
});

/* ✅ ADD TASK */
app.post("/tasks", (req, res) => {
  const { title, description, assignedTo, status } = req.body;

  db.query(
    "INSERT INTO tasks (title, description, assignedTo, status) VALUES (?, ?, ?, ?)",
    [title, description, assignedTo, status],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error adding task");
      }
      res.send("Task added successfully");
    }
  );
});

/* ✅ DELETE TASK */
app.delete("/tasks/:id", (req, res) => {
  db.query(
    "DELETE FROM tasks WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error deleting task");
      }
      res.send("Task deleted successfully");
    }
  );
});

/* ✅ START SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});