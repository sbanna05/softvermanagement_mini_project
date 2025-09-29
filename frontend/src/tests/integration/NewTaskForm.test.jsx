import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";
import NewTaskForm from "../../components/NewTaskForm.jsx";
import * as api from "../../api/tasks.js";

describe("NewTaskForm", () => {
  const mockOnTaskAdded = vi.fn();

  const mockUsers = [
    { user_id: "u1", name: "Teszt Elek" },
    { user_id: "u2", name: "Anna" }
  ];

  beforeEach(() => {
    vi.spyOn(api, "getUsers").mockResolvedValue(mockUsers);
    vi.spyOn(api, "createTask").mockImplementation(async (task) => ({ ...task, task_id: "t1" }));
    mockOnTaskAdded.mockClear();
  });

  it("renders all form elements", async () => {
    render(<NewTaskForm onTaskAdded={mockOnTaskAdded} />);
    
    expect(screen.getByPlaceholderText("Új feladat címe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Új feladat leírása")).toBeInTheDocument();
    expect(screen.getByText("Hozzáadás")).toBeInTheDocument();

    // Várjuk, hogy a felhasználói select betöltődjön
    await waitFor(() => expect(screen.getByText("Teszt Elek")).toBeInTheDocument());
    expect(screen.getByText("Anna")).toBeInTheDocument();
  });

  it("submits form and calls onTaskAdded", async () => {
    render(<NewTaskForm onTaskAdded={mockOnTaskAdded} />);
    
    // várjuk a felhasználó betöltődést
    await waitFor(() => screen.getByText("Teszt Elek"));

    fireEvent.change(screen.getByPlaceholderText("Új feladat címe"), { target: { value: "Új Task" } });
    fireEvent.change(screen.getByPlaceholderText("Új feladat leírása"), { target: { value: "Leírás" } });
    fireEvent.change(screen.getByLabelText("Feladat felelőse:"), { target: { value: "u1" } });

    fireEvent.click(screen.getByText("Hozzáadás"));

    await waitFor(() => expect(mockOnTaskAdded).toHaveBeenCalledWith(expect.objectContaining({
      title: "Új Task",
      description: "Leírás",
      task_owner_id: "u1"
    })));

    // ellenőrizzük a form reset-et
    expect(screen.getByPlaceholderText("Új feladat címe").value).toBe("");
    expect(screen.getByPlaceholderText("Új feladat leírása").value).toBe("");
  });
});
