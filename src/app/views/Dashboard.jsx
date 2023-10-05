import { useContext, useEffect } from "react";
import { AppLayout } from "../layout/AppLayout";
import { ProjectContext } from "../../context/ProjectContext";
import { AuthContext } from "../../context/AuthContext";
import { ProjectCard } from "../components/cards/ProjectCard";

export const Dashboard = () => {
  const { getAllProjects, projects } = useContext(ProjectContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <AppLayout>
      <section className="flex flex-col h-full px-8 py-12 bg-gray-900 rounded-lg shadow-2xl w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold text-gray-300">
            Welcome, {user?.username}
          </h1>
        </div>
        {projects?.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center">
            <p className="text-xl text-gray-300">
              You haven't created a project yet.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
              Let's create one!
            </button>
          </div>
        )}
      </section>
    </AppLayout>
  );
};
