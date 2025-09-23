import { supabase } from "./supabaseClient.js";

export const getTasks = async () => {
  const { data, error } = await supabase.from("tasks").select("*").order("task_id", { ascending: true });
  if (error) throw error;
  return data;
};

export const createTask = async (taskData) => {
  const { data, error } = await supabase.from("tasks").insert([taskData]).select();
  if (error) throw error;
  return data[0];
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
    .select();
  if (error) throw error;
  return data[0];
};

export const markTaskComplete = async (taskId, isComplete) => {
  const { data, error } = await supabase
    .from("tasks")
    .update({ completed: isComplete })
    .eq("task_id", taskId)
    .select();
  if (error) throw error;
  return data[0];
};


