// frontend/src/api/tasks.js
import axios from "axios";

// Alap axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api", // backend szerver
});

// Feladatokhoz kapcsolódó API hívások
export const getTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

export const createTask = async (taskData) => {
  const res = await api.post("/tasks", taskData);
  return res.data;
};

export const updateTask = async (id, updates) => {
  const res = await api.put(`/tasks/${id}`, updates);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};
