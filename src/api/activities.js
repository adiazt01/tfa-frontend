import axios from "axios";

const API_PROJECTS = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/project`,
  withCredentials: true,
});

export const getAllActivitiesRequest = async (id_project) => {
  const resp = await API_PROJECTS.get(`${id_project}/activities`);
  return resp;
};

export const getActivityRequest = async (id_project, id_activity) => {
  const resp = await API_PROJECTS.get(`${id_project}/activity/${id_activity}`);
  return resp;
};

export const createActivityRequest = async (id_project, data) => {
  console.log(id_project);
  const resp = await API_PROJECTS.post(`${id_project}/activity`, data);
  return resp;
};

export const deleteActivityRequest = async (id_project, id_activity) => {
  const resp = await API_PROJECTS.delete(
    `${id_project}/activity/${id_activity}`
  );
  return resp;
};

export const updateActivityRequest = async (id_project, id_activity, data) => {
  const resp = await API_PROJECTS.put(
    `${id_project}/activity/${id_activity}`,
    data
  );
  return resp;
};
