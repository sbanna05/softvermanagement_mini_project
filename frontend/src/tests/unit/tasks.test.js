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
  


});
