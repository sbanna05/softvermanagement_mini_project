import { useEffect, useState } from "react";
import { getTasks, getUsers } from "./api/tasks.js"; // vagy külön users.js

import TaskTable from "./components/TaskTable.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState({ user_id: "b68fa1a3-ef03-4ec4-8776-71cbf71b5858", name: "Teszt Elek" }); // teszt felhasználó
  const [users, setUsers] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getTasks();
        const usersData = await getUsers();
        setTasks(tasksData);
        setUsers(usersData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  // Szűrés a bejelentkezett felhasználóra
  const myTasks = tasks
    .filter(task => task.task_owner_id === currentUser.user_id)
    .map(task => {
      // Feloldjuk a user_id-t névre
      const owner = users.find(user => user.user_id === task.task_owner_id);
      return {
        ...task,
        assigned_to: owner?.name || "Unassigned"
      };
    });

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Üdvözöllek, {currentUser.name}!</h2>

      <section style={{ marginTop: "1rem", float: "left", width: "30%" }}>
        <h3>Napi feladataim:</h3>
        <ul>
          {tasks.map(task => (
            <li key={task.task_id}>{task.title}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "2rem", float: "right", width: "70%" }}>
        <h3>Napi feladataim</h3>
        <TaskTable tasks={myTasks} />
      </section>
    </div>
  );
}

export default App;
