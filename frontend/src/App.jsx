import { useEffect, useState } from "react";
import { getTasks, getUsers, archiveTask, deleteTask } from "./api/tasks.js";

import "./App.css";
import Sidebar from "./components/SideBar.jsx";
import TaskTable from "./components/TaskTable.jsx";
import ArchivedTasksTable from "./components/ArchivedTasksTable.jsx";
import NewTaskForm from "./components/NewTaskForm.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    user_id: "b68fa1a3-ef03-4ec4-8776-71cbf71b5858",
    name: "Teszt Elek"
  });
  const [activeView, setActiveView] = useState("tasks"); // <- új state

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

  const myTasks = tasks
    .filter((task) => task.task_owner_id === currentUser.user_id)
    .map((task) => {
      const owner = users.find((u) => u.user_id === task.task_owner_id);
      return {
        ...task,
        assigned_to: owner?.name || "Unassigned"
      };
    });

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setTasks((prev) => prev.filter((t) => t.task_id !== taskId));
    alert("Feladat törölve!")
  }
  const handleArchive = async (taskId) => {
    await archiveTask(taskId);
    alert("Feladat archiválva!");
  }
  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="d-flex">
      {/* Sidebar átadjuk a state settert */}
      <Sidebar currentUser={currentUser} setActiveView={setActiveView} />

      <main className="flex-grow-1 p-4 content-area">
        {activeView === "tasks" && (
          <>
            <h2 className="mb-4">Napi feladataim</h2>
            <TaskTable
              tasks={myTasks}
              onDelete={handleDelete}
              onArchive={handleArchive}
            />
          </>
        )}

        {activeView === "archived" && (
          <>
            <h2 className="mb-4">Archivált feladatok</h2>
            <ArchivedTasksTable userId={currentUser.user_id} />
          </>
        )}

        {activeView === "progress" && <h2>Dolgozói előrehaladás (hamarosan...)</h2>}
        {activeView === "create" && <NewTaskForm onTaskAdded={handleTaskAdded}/>}
        {activeView === "reminders" && <h2>Emlékeztetők (hamarosan...)</h2>}
      </main>
    </div>
  );
}

export default App;
