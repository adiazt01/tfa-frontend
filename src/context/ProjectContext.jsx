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

  const getAllProjects = async () => {
    try {
      const res = await getAllProjectsRequest();
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProject = async (id_project) => {
    try {
      const res = await getProjectRequest(id_project);
      setSelectedProject(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProject = async (data) => {
    const res = await createProjectRequest(data);
  };

  const updateProject = async (id_project, data) => {
    const res = await updateProjectRequest(id_project, data);
  };

  const deleteProject = async (id_project) => {
    const res = await deleteProjectRequest(id_project);
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
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
