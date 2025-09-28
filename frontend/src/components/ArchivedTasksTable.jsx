import { useEffect, useState } from "react";
import { getArchivedTasks } from "../api/tasks";

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
        {archivedTasks.map((task) => {
          const deadlineFormatted = task.deadline
            ? new Date(task.deadline).toLocaleString("sv-SG", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Nincs";

          const archivedFormatted = task.archived_at
            ? new Date(task.archived_at).toLocaleString("sv-SG", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Nincs";

          return (
            <tr key={task.archive_id}>
              <td>{task.title}</td>
              <td>{deadlineFormatted}</td>
              <td>{task.owner_name}</td>
              <td>{task.members || "Nincs"}</td>
              <td>{archivedFormatted}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ArchivedTasksTable;
