import Task from "../models/task.model.js";
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(400).json({ message: "Error getting tasks" });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(400).json({ message: "Error creating a task" });
  }
};
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Error deleting task" });
  }
};
export const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateTask) return res.status(404).json({ message: "Task not found" });
    res.json(updateTask);
  } catch (error) {
    return res.status(400).json({ message: "Error updating task" });
  }
};
