import axios from "axios";

const API_PROJECTS = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
  withCredentials: true,
});

export const getAllProjectsRequest = async () => {
  const resp = await API_PROJECTS.get("/projects");
  return resp;
};

export const createProjectRequest = async (data) => {
  const resp = await API_PROJECTS.post("/project", data);
  return resp;
};

export const getProjectRequest = async (id_project) => {
  const resp = await API_PROJECTS.get(`project/${id_project}`);
  return resp;
};

export const updateProjectRequest = async (id_project, data) => {
  const resp = await API_PROJECTS.put(`project/${id_project}`, data);
  return resp;
};

export const deleteProjectRequest = async (id_project) => {
  const resp = await API_PROJECTS.delete(`project/${id_project}`);
  return resp;
};
