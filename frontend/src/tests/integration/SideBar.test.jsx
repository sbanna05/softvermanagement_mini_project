import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import Sidebar from "../../components/SideBar.jsX";

describe("Sidebar component", () => {
  const mockSetActiveView = vi.fn();
  const currentUser = { name: "Teszt Elek", user_id: "u1" };

  beforeEach(() => {
    mockSetActiveView.mockClear();
  });

  it("renders current user name", () => {
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
    expect(screen.getByText("Teszt Elek")).toBeInTheDocument();
  });

  it("renders all sidebar menu items", () => {
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
    expect(screen.getByText("📌 Napi feladataim")).toBeInTheDocument();
    expect(screen.getByText("📊 Dolgozói előrehaladás")).toBeInTheDocument();
    expect(screen.getByText("📝 Feladat kiadása")).toBeInTheDocument();
    expect(screen.getByText("⏰ Emlékeztetők")).toBeInTheDocument();
    expect(screen.getByText("📂 Archivált feladatok")).toBeInTheDocument();
  });

  it("calls setActiveView with correct value when menu items clicked", () => {
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
    
    fireEvent.click(screen.getByText("📌 Napi feladataim"));
    expect(mockSetActiveView).toHaveBeenCalledWith("tasks");

    fireEvent.click(screen.getByText("📊 Dolgozói előrehaladás"));
    expect(mockSetActiveView).toHaveBeenCalledWith("progress");

    fireEvent.click(screen.getByText("📝 Feladat kiadása"));
    expect(mockSetActiveView).toHaveBeenCalledWith("create");

    fireEvent.click(screen.getByText("⏰ Emlékeztetők"));
    expect(mockSetActiveView).toHaveBeenCalledWith("reminders");

    fireEvent.click(screen.getByText("📂 Archivált feladatok"));
    expect(mockSetActiveView).toHaveBeenCalledWith("archived");
  });

  it("renders action buttons", () => {
    render(<Sidebar currentUser={currentUser} setActiveView={mockSetActiveView} />);
    expect(screen.getByText("Összesítő generálása")).toBeInTheDocument();
    expect(screen.getByText("Kilépés")).toBeInTheDocument();
  });
});
