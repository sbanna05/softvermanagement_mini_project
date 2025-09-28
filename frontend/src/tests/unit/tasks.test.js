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

});
