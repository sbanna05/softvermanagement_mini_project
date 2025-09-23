function TaskTable({ tasks }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th style={thStyle}>Cím</th>
          <th style={thStyle}>Prioritás</th>
          <th style={thStyle}>Határidő</th>
          <th style={thStyle}>Állapot</th>
          <th style={thStyle}>Feladat felelőse</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.task_id}>
            <td style={tdStyle}>{task.title}</td>
            <td style={tdStyle}>{task.priority}</td>
            <td style={tdStyle}>{task.deadline?.slice(0, 10)}</td>
            <td style={tdStyle}>{task.status}</td>
            <td style={tdStyle}>{task.assigned_to || "Unassigned"}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const thStyle = { border: "1px solid #ccc", padding: "0.5rem", background: "#f0f0f0" };
const tdStyle = { border: "1px solid #ccc", padding: "0.5rem" };

export default TaskTable;
