import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";
import Sidebar from "../../components/SideBar.jsx";
import { MemoryRouter } from "react-router-dom";

// --- Mockoljuk a UserAuth hook-ot ---
vi.mock("../../context/AuthContext", () => ({
  UserAuth: () => ({
    session: { user: { name: "Teszt Elek", id: "u1", user_metadata: { name: "Teszt Elek" } } },
    signOut: vi.fn(),
  }),
}));

describe("Sidebar component", () => {
  const mockSetActiveView = vi.fn();
  const currentUser = { name: "Teszt Elek", user_id: "u1" };

  beforeEach(() => {
    mockSetActiveView.mockClear();
  });

  it("renders current user name", () => {
<<<<<<< HEAD
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );
=======
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
>>>>>>> 522634b (test(sidebar): check whether setActiveView is working correctly (#36))
    expect(screen.getByText("Teszt Elek")).toBeInTheDocument();
  });

  it("renders all sidebar menu items", () => {
<<<<<<< HEAD
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );
    expect(screen.getByText("📌 Napi feladataim")).toBeInTheDocument();
    expect(screen.getByText("📝 Feladat kiadása")).toBeInTheDocument();
=======
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
    expect(screen.getByText("📌 Napi feladataim")).toBeInTheDocument();
    expect(screen.getByText("📊 Dolgozói előrehaladás")).toBeInTheDocument();
    expect(screen.getByText("📝 Feladat kiadása")).toBeInTheDocument();
    expect(screen.getByText("⏰ Emlékeztetők")).toBeInTheDocument();
>>>>>>> 522634b (test(sidebar): check whether setActiveView is working correctly (#36))
    expect(screen.getByText("📂 Archivált feladatok")).toBeInTheDocument();
  });

  it("calls setActiveView with correct value when menu items clicked", () => {
<<<<<<< HEAD
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("📌 Napi feladataim"));
    expect(mockSetActiveView).toHaveBeenCalledWith("tasks");

    fireEvent.click(screen.getByText("📝 Feladat kiadása"));
    expect(mockSetActiveView).toHaveBeenCalledWith("create");

=======
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
    
    fireEvent.click(screen.getByText("📌 Napi feladataim"));
    expect(mockSetActiveView).toHaveBeenCalledWith("tasks");

    fireEvent.click(screen.getByText("📊 Dolgozói előrehaladás"));
    expect(mockSetActiveView).toHaveBeenCalledWith("progress");

    fireEvent.click(screen.getByText("📝 Feladat kiadása"));
    expect(mockSetActiveView).toHaveBeenCalledWith("create");

    fireEvent.click(screen.getByText("⏰ Emlékeztetők"));
    expect(mockSetActiveView).toHaveBeenCalledWith("reminders");

>>>>>>> 522634b (test(sidebar): check whether setActiveView is working correctly (#36))
    fireEvent.click(screen.getByText("📂 Archivált feladatok"));
    expect(mockSetActiveView).toHaveBeenCalledWith("archived");
  });

  it("renders action buttons", () => {
<<<<<<< HEAD
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );
=======
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
    expect(screen.getByText("Összesítő generálása")).toBeInTheDocument();
>>>>>>> 522634b (test(sidebar): check whether setActiveView is working correctly (#36))
    expect(screen.getByText("Kilépés")).toBeInTheDocument();
  });
});
