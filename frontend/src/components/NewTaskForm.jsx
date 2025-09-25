import { useState, useEffect } from "react";
import { createTask, getUsers } from "../api/tasks.js";

function NewTaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("közepes");
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("backlog");
  const [assignee, setAssignee] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error("Hiba a felhasználók lekérésekor:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await createTask({
        title,
        priority,
        description,
        deadline,
        status,
        task_owner_id: assignee,
      });
      onTaskAdded(newTask);
      // reset form
      setTitle("");
      setPriority("közepes");
      setDescription("")
      setDeadline("");
      setStatus("backlog");
      setAssignee("");
    } catch (err) {
      console.error("Hiba task létrehozásakor:", err);
    }
  };

  const handleMemberChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setMembers(value);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <div className="mb-2">
        <label>Cím:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Új feladat címe"
          className="form-control"
          required
        />
      </div>

      <div className="mb-2">
        <label>Prioritás:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-select"
        >
          <option value="alacsony">Alacsony</option>
          <option value="közepes">Közepes</option>
          <option value="magas">Magas</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Leírás:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Új feladat leírása"
          className="form-control"
          required
        />
      </div>

      <div className="mb-2">
        <label>Határidő:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-2">
        <label>Állapot:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-select"
        >
          <option value="backlog">Backlog</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
          <option value="need help">Need help</option>
          <option value="under review">Under review</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Feladat felelőse:</label>
        <select
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="form-select"
          required
        >
          <option value="">-- Válassz felhasználót --</option>
          {users.map((u) => (
            <option key={u.user_id} value={u.user_id}>
              {u.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Hozzáadás
      </button>
    </form>
  );
}
export default NewTaskForm