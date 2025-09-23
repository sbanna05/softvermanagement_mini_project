import { useEffect } from "react";
import { getTasks } from "./api/tasks.js";

function App() {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        console.log("Tasks from Supabase:", tasks);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Task Manager (Demo)</h1>
      <p>Check the console for tasks loaded from Supabase.</p>
    </div>
  );
}

export default App;
