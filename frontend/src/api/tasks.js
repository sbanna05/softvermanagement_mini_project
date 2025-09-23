import { supabase } from "./supabaseClient.js";

export const getTasks = async () => {
  const { data, error } = await supabase.from("tasks").select("*").order("task_id");
  if (error) throw error;
  return data;
};

export const createTask = async (taskData) => {
  const { data, error } = await supabase.from("tasks").insert([taskData]).select();
  if (error) throw error;
  return data[0];
};

export const updateTask = async (id, updates) => {
  const { data, error } = await supabase.from("tasks").update(updates).eq("id", id).select();
  if (error) throw error;
  return data[0];
};

export const deleteTask = async (id) => {
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) throw error;
  return { success: true };
};
