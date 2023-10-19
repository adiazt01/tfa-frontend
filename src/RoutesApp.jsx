import { Route, Routes, Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Login } from "./auth/pages/Login";
import { Register } from "./auth/pages/Register";
import { Dashboard } from "./app/views/Dashboard";
import { ProjectForm } from "./app/views/ProjectForm";
import { ViewProject } from "./app/views/ViewProject";
import { ActivityCreateForm } from "./app/views/ActivityCreateForm";
import { TaskCreateForm } from "./app/views/TaskCreateForm";
import { ActivityUpdateForm } from "./app/views/ActivityUpdateForm";
import { TaskUpdateForm } from "./app/views/TaskUpdateForm";
import { ProjectUpdateForm } from "./app/views/ProjectUpdateForm";
import { LandingPage } from "./public/views/LandingPage";

export const ProtectedRoute = () => {
  const { loading, authenticated } = useContext(AuthContext);
  if (!loading && !authenticated) return <Navigate to="/auth/login" replace />;

  return <Outlet />;
};

export const PublicRoute = () => {
  const { loading, authenticated } = useContext(AuthContext);
  console.log(loading);
  if (!loading && authenticated) return <Navigate to="/app/" replace />;

  return <Outlet />;
};

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoute />}>
        <Route path="" element={<LandingPage />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Route>
      <Route path="/app/*" element={<ProtectedRoute />}>
        <Route path="" element={<Dashboard />} />
        <Route path="project/project_create" element={<ProjectForm />} />
        <Route path="project/:id_project" element={<ViewProject />} />
        <Route
          path="project/:id_project/project_update"
          element={<ProjectUpdateForm />}
        />
        <Route
          path="project/:id_project/activity_create"
          element={<ActivityCreateForm />}
        />
        <Route
          path="project/:id_project/:id_activity/activity_update"
          element={<ActivityUpdateForm />}
        />
        <Route
          path="project/:id_project/activity/:id_activity/task_create"
          element={<TaskCreateForm />}
        />
        <Route
          path="project/:id_project/activity/:id_activity/:id_task/task_update"
          element={<TaskUpdateForm />}
        />
      </Route>
    </Routes>
  );
};
