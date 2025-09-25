import {useState} from 'react'

function TaskTable({ tasks, onDelete, onArchive }) {
  const [menu, setMenu] = useState({ visible: false, x: 0, y: 0, taskId: null });

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
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.task_id}
              onContextMenu={(e) => handleContextMenu(e, task.task_id)}
            >
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>{task.deadline}</td>
              <td>{task.status}</td>
              <td>{task.assigned_to}</td>
              <td>{task.members}</td>
            </tr>
          ))}
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
          <li onClick={() => { onArchive(menu.taskId); handleClose(); }}>Archiválás</li>
          <li onClick={() => { alert("Szerkesztés folyamatban..."); handleClose(); }}>Szerkesztés</li>
          <li style={{ color: "red" }} onClick={() => { onDelete(menu.taskId); handleClose(); }}>Törlés</li>
        </ul>
      )}
    </div>
  );
}

export default TaskTable