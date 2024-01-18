import {toast} from "react-toastify";

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Random ID Generator
const randId = () => {
    return Math.floor(Math.random() * 1000);
}

// Save the Task
const saveTask = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
};

// Store the Tasks
const createTask = async (task) => {
    // console.log("Task.js =", task);
    
    try {
        const extTask = tasks.find((item)=> item.title === task.title);
        if (extTask) {
        toast.warning(`${task.title} already exists`);
        } 
        else {
            const newTask = {
                id: randId(),
                ...task,
            };
            tasks.push(newTask);
            saveTask(tasks);
            toast.success("New task created successfully");
            window.location.href = "/"; 
        } 
    } catch (error) {
        toast.error(error.message);
    };
};

const readAllTask = () => {
    return tasks;
};

const deleteTask = (id) => {
   try {
       const taskIndex = tasks.findIndex((item) => item.id === id);
       tasks.splice(taskIndex, 1);
       saveTask(tasks);
       toast.success(`${id} Deleted successfully`)
       window.location.href = "/";
   } catch (error) {
       toast.error(error.message);
   }
};

const readSingleTask = (id) => {
    const data = tasks.find((item) => item.id == id);
    return data;
};

const updateTask = (id, task) => {
  try {
      const taskIndex = tasks.findIndex((item) => item.id == id);
      tasks.splice(taskIndex, 1, task);
      saveTask(tasks);
      toast.success("Updated Successfully")
      window.location.href = "/";
  } catch (error) {
      toast.error(error.message);
  }
};

export { createTask, readAllTask, deleteTask, readSingleTask, updateTask };