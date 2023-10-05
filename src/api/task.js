import axios from "axios";

const API_PROJECTS = axios.create({
  baseURL: `${import.meta.env.BACKEND_URL}/api/project`,
  withCredentials: true,
});

export const getAllTaskRequest = async (id_project, id_activity) => {
  const resp = await API_PROJECTS.get(
    `${id_project}/activity/${id_activity}/tasks`
  );
  return resp;
};

export const createTaskRequest = async (id_project, id_activity, data) => {
  console.log(id_project);
  console.log(id_activity);
  const resp = await API_PROJECTS.post(
    `${id_project}/activity/${id_activity}/task`,
    data
  );
  return resp;
};

export const updateTaskRequest = async (
  id_project,
  id_activity,
  id_task,
  data
) => {
  console.log(id_task);
  const resp = await API_PROJECTS.put(
    `${id_project}/activity/${id_activity}/task/${id_task}`,
    data
  );
  console.log(data);
  return resp;
};

export const deleteTaskRequest = async (
  id_project,
  id_activity,
  id_task,
) => {
  console.log(id_task);
  const resp = await API_PROJECTS.delete(
    `${id_project}/activity/${id_activity}/task/${id_task}`
  );
  return resp;
};
