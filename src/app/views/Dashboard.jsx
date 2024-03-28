import { useContext, useEffect } from "react";
import { AppLayout } from "../layout/AppLayout";
import { ProjectContext } from "../../context/ProjectContext";
import { AuthContext } from "../../context/AuthContext";
import { ProjectCard } from "../components/cards/ProjectCard";

export const Dashboard = () => {
  const { getAllProjects, projects, loading } = useContext(ProjectContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <AppLayout>
      <section className="flex flex-col h-full px-8 py-12 w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl truncate text-center w-full font-semibold text-gray-800 dark:text-gray-200">
            Welcome {user?.username}!
          </h1>
        </div>
        {loading && !projects && (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        {projects?.length && !loading >= 0 ? (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 w-[100%] lg:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl text-gray-800 dark:text-gray-300">
              You haven&lsquo;t created a project yet. 😴
            </p>
          </div>
        )}
      </section>
    </AppLayout>
  );
};
