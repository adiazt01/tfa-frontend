import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoutesApp } from "./RoutesApp";
import { ProjectProvider } from "./context/ProjectContext";
import { ActivityProvider } from "./context/ActivityContext";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectProvider>
          <ActivityProvider>
            <TaskProvider>
              <ThemeProvider>
                <RoutesApp />
              </ThemeProvider>
            </TaskProvider>
          </ActivityProvider>
        </ProjectProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
