import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoutesApp } from "./RoutesApp";
import { ProjectProvider } from "./context/ProjectContext";
import { ActivityProvider } from "./context/ActivityContext";
import { TaskProvider } from "./context/TaskContext";

export const App = () => {
  return (
            <BrowserRouter>
    <AuthProvider>
      <ProjectProvider>
        <ActivityProvider>
          <TaskProvider>
              <RoutesApp />
          </TaskProvider>
        </ActivityProvider>
      </ProjectProvider>
    </AuthProvider>
            </BrowserRouter>
  );
};
