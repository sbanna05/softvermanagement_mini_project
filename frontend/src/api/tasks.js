import { supabase } from "./supabaseClient.js";

export const getTasks = async () => {
  const { data, error } = await supabase.from("tasks").select("*").order("task_id", { ascending: true });
  if (error) throw error;
  return data;
};

export const createTask = async (taskData) => {
  const { data, error } = await supabase
    .from("tasks")
    .insert([taskData])
    .select().single();

  if (error) throw error;

  return data;
};

export const deleteTask = async (id) => {
  const { error } = await supabase.from("tasks").delete().eq("task_id", id);
  if (error) throw error;
  return { success: true };
};

export const addUser = async (userData) => {
  const { data, error } = await supabase.from("users").insert([userData]).select();
  if (error) throw error;
  return data[0];
};

export const getUsers = async () => {
  const { data, error } = await supabase.from("users").select("*").order("user_id", { ascending: true });
  if (error) throw error;
  return data;
};

export const assignTaskToUser = async (taskId, userId) => {
  const { data, error } = await supabase
    .from("tasks")
    .update({ assigned_to: userId })
    .eq("task_id", taskId)
    .select().single();
  if (error) throw error;
  return data;
};

export const markTaskComplete = async (taskId, isComplete) => {
  const { data, error } = await supabase
    .from("tasks")
    .update({ status: isComplete ? "Done" : "Under Review" })
    .eq("task_id", taskId)
    .select();
  if (error) throw error;
  return data[0];
};

export const archiveTask = async (taskId) => {
  const { data, error } = await supabase
    .from("archives")
    .insert([{ task_id: taskId, archived: new Date().toISOString() }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getArchivedTasks = async (userId = null) => {
  let query = supabase
    .from("archived_tasks_view")
    .select("*")
    .order("archived_at", { ascending: false });

  if (userId) {
    // itt előbb lekérdezed a user-t az "users" táblából
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("name")
      .eq("user_id", userId)
      .single();

    if (userError) throw userError;

    query = query.eq("owner_name", user.name);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};


