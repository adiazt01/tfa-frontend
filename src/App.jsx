import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoutesApp } from "./RoutesApp";
import { ProjectProvider } from "./context/ProjectContext";
import { ActivityProvider } from "./context/ActivityContext";
import { TaskProvider } from "./context/TaskContext";

export const App = () => {
  return (
    <AuthProvider>
      <ProjectProvider>
        <ActivityProvider>
          <TaskProvider>
            <BrowserRouter>
              <RoutesApp />
            </BrowserRouter>
          </TaskProvider>
        </ActivityProvider>
      </ProjectProvider>
    </AuthProvider>
  );
};