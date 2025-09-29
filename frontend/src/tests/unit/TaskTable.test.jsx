import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import TaskTable from "../../components/TaskTable.jsx";
import { markTaskComplete } from "../../api/tasks";

vi.mock("../../api/tasks", () => ({
  markTaskComplete: vi.fn((taskId, completed) =>
    Promise.resolve({ task_id: taskId, status: completed ? "done" : "backlog" })
  ),
}));

describe("TaskTable integration", () => {
  it("renders tasks and allows archive", async () => {
    const tasks = [
      {
        task_id: "1",
        title: "Teszt Task",
        task_owner_id: "b68fa1a3-ef03-4ec4-8776-71cbf71b5858",
        status: "done",
        assigned_to: "Teszt Elek",
      },
    ];

    let currentTasks = [...tasks];
    const setTasks = (updater) => {
      if (typeof updater === "function") {
        currentTasks = updater(currentTasks);
      } else {
        currentTasks = updater;
      }
      rerender(<TaskTable tasks={currentTasks} setTasks={setTasks} onArchive={onArchive} onDelete={onDelete} />);
    };

    const onArchive = vi.fn((taskId) => {
      currentTasks = currentTasks.filter((t) => t.task_id !== taskId);
      rerender(<TaskTable tasks={currentTasks} setTasks={setTasks} onArchive={onArchive} onDelete={onDelete} />);
    });

    const onDelete = vi.fn();

    const { rerender } = render(
      <TaskTable tasks={currentTasks} setTasks={setTasks} onArchive={onArchive} onDelete={onDelete} />
    );

    // Ellenőrizzük, hogy megjelenik a task
    const taskElement = await screen.findByText("Teszt Task");
    expect(taskElement).toBeInTheDocument();

    const table = screen.getByRole("table");
    expect(within(table).getByText("Teszt Elek")).toBeInTheDocument();

    // Archiválás
    fireEvent.contextMenu(taskElement); // jobb klikk megnyitja a context menüt
    const archiveMenu = await screen.findByText("Archiválás");
    fireEvent.click(archiveMenu);

    // Ellenőrizzük, hogy eltűnt a task
    await waitFor(() => {
      expect(screen.queryByText("Teszt Task")).not.toBeInTheDocument();
    });
  });
});
