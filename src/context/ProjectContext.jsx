import { createContext, useState } from "react";

import {
  createProjectRequest,
  deleteProjectRequest,
  getAllProjectsRequest,
  getProjectRequest,
  updateProjectRequest,
} from "../api/projects";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState();
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllProjects = async () => {
    setLoading(true);
    try {
      const res = await getAllProjectsRequest();
      setProjects(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getProject = async (id_project) => {
    setLoading(true);
    try {
      const res = await getProjectRequest(id_project);
      console.log(res);
      setSelectedProject(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const createProject = async (data) => {
    setLoading(true);
    try {
      await createProjectRequest(data);
      setLoading(false);
    } catch (error) {
      // Notificacion que indica que hubo un fallo
      setLoading(false);
    }
  };

  const updateProject = async (id_project, data) => {
    setLoading(true);
    try {
      await updateProjectRequest(id_project, data);
      setLoading(false);
    } catch (error) {
      // Notificacion que indica que hubo un fallo
      setLoading(false);
    }
  };

  const deleteProject = async (id_project) => {
    setLoading(true);
    try {
      // Notificacion que indica que hubo un fallo
      setProjects(projects.filter((project) => project._id != id_project))
      await deleteProjectRequest(id_project);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProject,
        getProject,
        updateProject,
        createProject,
        getAllProjects,
        deleteProject,
        setSelectedProject,
        loading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
