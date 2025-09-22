import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy adatbázis helyett memória
let tasks = [
  { id: 1, title: "Dokumentáció befejezése", completed: false },
  { id: 2, title: "Frontend struktúra kialakítása", completed: false },
  { id: 3, title: "Backend alap API implementálása", completed: true },
];

// GET /api/tasks → összes feladat
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// POST /api/tasks → új feladat
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id → feladat módosítása
app.put("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  Object.assign(task, req.body); // frissíti a mezőket
  res.json(task);
});

// DELETE /api/tasks/:id → feladat törlése
app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  res.json({ message: "Task deleted" });
});

// Indítás
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
