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
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );
    expect(screen.getByText("Teszt Elek")).toBeInTheDocument();
  });

  it("renders all sidebar menu items", () => {
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );
    expect(screen.getByText("📌 Napi feladataim")).toBeInTheDocument();
    expect(screen.getByText("📝 Feladat kiadása")).toBeInTheDocument();
    expect(screen.getByText("📂 Archivált feladatok")).toBeInTheDocument();
  });

  it("calls setActiveView with correct value when menu items clicked", () => {
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("📌 Napi feladataim"));
    expect(mockSetActiveView).toHaveBeenCalledWith("tasks");

    fireEvent.click(screen.getByText("📝 Feladat kiadása"));
    expect(mockSetActiveView).toHaveBeenCalledWith("create");

    fireEvent.click(screen.getByText("📂 Archivált feladatok"));
    expect(mockSetActiveView).toHaveBeenCalledWith("archived");
  });

  it("renders action buttons", () => {
    render(
      <MemoryRouter>
        <Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />
      </MemoryRouter>
    );
    expect(screen.getByText("Kilépés")).toBeInTheDocument();
  });
});
