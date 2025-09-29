// tasks.test.js
import { vi, describe, it, expect, beforeEach } from "vitest";
import {
  getTasks,
  createTask,
  deleteTask,
  addUser,
  getUsers,
  getArchivedTasks,
  markTaskComplete,
  archiveTask,
} from "../../api/tasks.js";

import { supabase } from "../../api/supabaseClient.js";


// ----- Mock Supabase -----
vi.mock("../../api/supabaseClient.js", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe("tasks API", () => {
  it("getTasks: visszaadja a rendezett taskokat", async () => {
    const mockData = [{ task_id: "1", title: "Teszt Task" }];
    supabase.from.mockReturnValue({
      select: () => ({ order: () => ({ data: mockData, error: null }) }),
    });

    const result = await getTasks();
    expect(result).toEqual(mockData);
  });

  it("createTask: új task hozzáadása", async () => {
    const newTask = { title: "Új task" };
    supabase.from.mockReturnValue({
      insert: () => ({
        select: () => ({ single: () => ({ data: { task_id: "1", ...newTask }, error: null }) }),
      }),
    });

    const result = await createTask(newTask);
    expect(result).toMatchObject(newTask);
  });

  it("deleteTask: task törlése", async () => {
    supabase.from.mockReturnValue({
      delete: () => ({ eq: () => ({ error: null }) }),
    });

    const result = await deleteTask("123");
    expect(result).toEqual({ success: true });
  });

  it("addUser: új user beszúrása", async () => {
    const user = { name: "Teszt Elek", email: "teszt@teszt.hu" };
    supabase.from.mockReturnValue({
      insert: () => ({ select: () => ({ data: [user], error: null }) }),
    });

    const result = await addUser(user);
    expect(result).toEqual(user);
  });

  it("getUsers: visszaadja az összes usert", async () => {
    const mockUsers = [{ user_id: "1", name: "CEO" }];
    supabase.from.mockReturnValue({
      select: () => ({ order: () => ({ data: mockUsers, error: null }) }),
    });

    const result = await getUsers();
    expect(result).toEqual(mockUsers);
  });

  it("assignTaskToUser: task hozzárendelése userhez", async () => {
    const updated = { task_id: "1", assigned_to: "u1" };
    supabase.from.mockReturnValue({
      update: () => ({
        eq: () => ({
          select: () => ({ single: () => ({ data: updated, error: null }) }),
        }),
      }),
    });

    const result = await assignTaskToUser("1", "u1");
    expect(result).toEqual(updated);
  });

  it("markTaskComplete: állapot done-ra váltása", async () => {
    const updated = { task_id: "1", status: "done" };
    supabase.from.mockReturnValue({
      update: () => ({
        eq: () => ({ select: () => ({ data: [updated], error: null }) }),
      }),
    });

    const result = await markTaskComplete("1", true);
    expect(result.status).toBe("done");
  });

  it("archiveTask: archiválás", async () => {
    const archived = { archive_id: "a1", task_id: "1" };
    supabase.from.mockReturnValue({
      insert: () => ({
        select: () => ({ single: () => ({ data: archived, error: null }) }),
      }),
    });

    const result = await archiveTask("1");
    expect(result).toEqual(archived);
  });

  it("getArchivedTasks: userId nélkül ad vissza adatokat", async () => {
    const archived = [{ task_id: "1", title: "Régi" }];
    supabase.from.mockReturnValueOnce({
      select: () => ({ order: () => ({ data: archived, error: null }) }),
    });

    const result = await getArchivedTasks();
    expect(result).toEqual(archived);
  });
});

it("getTasks: hibás adatra fail", async () => {
  const mockData = [{ task_id: "1", title: "Valami más" }];
  supabase.from.mockReturnValue({
    select: () => ({ order: () => ({ data: mockData, error: null }) }),
  });

  const result = await getTasks();
  const expected = [{ task_id: "1", title: "Teszt Task" }];
  expect(result).not.toEqual(expected); // szándékosan eltérő, így false lesz
});

it("deleteTask: hibás id esetén fail", async () => {
  supabase.from.mockReturnValue({
    delete: () => ({ eq: () => ({ error: "not found" }) }),
  });

  await expect(deleteTask("999")).rejects.toThrow("not found");
});