import { createContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getAllTaskRequest,
  updateTaskRequest,
} from "../api/task";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllTasks = async (id_project, id_activity) => {
    setLoading(true);
    try {
      const resp = await getAllTaskRequest(id_project, id_activity);
      setLoading(false);
      return resp;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getTask = async (id_project, id_activity, id_task, data) => {
    setLoading(true);
    try {
      const resp = await updateTaskRequest(
        id_project,
        id_activity,
        id_task,
        data
      );
      setSelectedTask(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const createTask = async (id_project, id_activity, data) => {
    setLoading(true);
    try {
      const resp = await createTaskRequest(id_project, id_activity, data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const updateTask = async (id_project, id_activity, id_task, data) => {
    setLoading(true);
    try {
      const resp = await updateTaskRequest(
        id_project,
        id_activity,
        id_task,
        data
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteTask = async (id_project, id_activity, id_task) => {
    setLoading(true);
    try {
      await deleteTaskRequest(id_project, id_activity, id_task);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        getAllTasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
