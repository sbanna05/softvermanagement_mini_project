import { useState } from "react";
import { markTaskComplete } from "../api/tasks";

function TaskTable({ tasks, setTasks, onDelete, onArchive }) {
  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    taskId: null,
  });

  const handleContextMenu = (e, taskId) => {
    e.preventDefault();
    setMenu({ visible: true, x: e.pageX, y: e.pageY, taskId });
  };

  const handleClose = () => setMenu({ ...menu, visible: false });

  return (
    <div onClick={handleClose}>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Cím</th>
            <th>Prioritás</th>
            <th>Határidő</th>
            <th>Állapot</th>
            <th>Felelős</th>
            <th>Tagok</th>
            <th>Befejezve</th>
          </tr>
        </thead>
        <tbody>
            {tasks.map((task) => {
              const deadlineFormatted = task.deadline
                ? new Date(task.deadline).toLocaleString("sv-SG", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "Nincs";

              return (
                <tr
                  key={task.task_id}
                  onContextMenu={(e) => handleContextMenu(e, task.task_id)}
                >
                  <td>{task.title}</td>
                  <td>{task.priority}</td>
                  <td>{deadlineFormatted}</td>
                  <td>{task.status}</td>
                  <td>{task.assigned_to}</td>
                  <td>{task.members || "Nincs"}</td>
                  <td>
                    <button
                      className="btn btn-outline-success"
                      onClick={async () => {
                        const updated = await markTaskComplete(
                          task.task_id,
                          task.status.toLowerCase() === "done" ? false : true
                        );
                        setTasks((prev) =>
                          prev.map((t) =>
                            t.task_id === task.task_id ? updated : t
                          )
                        );
                      }}
                    >
                      Kész
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
      </table>

      {menu.visible && (
        <ul
          className="context-menu"
          style={{
            position: "absolute",
            top: menu.y,
            left: menu.x,
            background: "white",
            border: "1px solid #ccc",
            listStyle: "none",
            padding: "0.5rem",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 1000,
          }}
        >
          <li
            onClick={() => {
              onArchive(menu.taskId);
              handleClose();
            }}
          >
            Archiválás
          </li>
          <li
            onClick={() => {
              alert("Szerkesztés folyamatban...");
              handleClose();
            }}
          >
            Szerkesztés
          </li>
          <li
            style={{ color: "red" }}
            onClick={() => {
              onDelete(menu.taskId);
              handleClose();
            }}
          >
            Törlés
          </li>
        </ul>
      )}
    </div>
  );
}

export default TaskTable;
