import { useEffect, useState } from "react";
import { getArchivedTasks } from "../api/tasks"; // majd ezt meg kell írni

function ArchivedTasksTable({ userId }) {
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
  const fetchArchived = async () => {
    try {
      const data = await getArchivedTasks(userId); // csak az adott userhez
      setArchivedTasks(data);
    } catch (err) {
      console.error("Archivált feladatok lekérdezése hiba:", err);
    }
  };
  fetchArchived();
}, [userId]);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Cím</th>
          <th>Határidő</th>
          <th>Feladat felelőse</th>
          <th>További csapattagok</th>
          <th>Archiválva</th>
        </tr>
      </thead>
      <tbody>
        {archivedTasks.map((task) => (
          <tr key={task.archive_id}>
            <td>{task.title}</td>
            <td>{task.deadline}</td>
            <td>{task.owner_name}</td>
            <td>{task.members || "Nincs"}</td>
            <td>{task.archived_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ArchivedTasksTable;
