import { createContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getAllTaskRequest,
  updateTaskRequest,
} from "../api/task";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState(null)
  const [tasks, setTasks] = useState(null);

  const getAllTasks = async (id_project, id_activity) => {
    try {
      const resp = await getAllTaskRequest(id_project, id_activity);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id_project, id_activity, id_task, data) => {
    try {
      const resp = await updateTaskRequest(
        id_project,
        id_activity,
        id_task,
        data
      );
      console.log(id_task);
      setSelectedTask(resp.data)
    } catch (error) {
      console.log(error);
    }
  }

  const createTask = async (id_project, id_activity, data) => {
    try {
      const resp = await createTaskRequest(id_project, id_activity, data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id_project, id_activity, id_task, data) => {
    try {
      const resp = await updateTaskRequest(
        id_project,
        id_activity,
        id_task,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id_project, id_activity, id_task) => {
    try {
      const resp = await deleteTaskRequest(id_project, id_activity, id_task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, getAllTasks, getTask ,createTask, updateTask, deleteTask, selectedTask, setSelectedTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
