import { useContext, useEffect } from "react";
import { AppLayout } from "../layout/AppLayout";
import { ProjectContext } from "../../context/ProjectContext";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillCalendar, AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { ActivityContext } from "../../context/ActivityContext";
import { ActivityCard } from "../components/cards/ActivityCard";

export const ViewProject = () => {
  const { id_project } = useParams();
  const { getProject, selectedProject } = useContext(ProjectContext);
  const { getAllActivities, activities } = useContext(ActivityContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getAsyncData = async () => {
      await getProject(id_project);
      await getAllActivities(id_project);
    };
    getAsyncData();
  }, []);

  return (
    <AppLayout>
      <section className="pb-12 bg-gradient-to-br from-indigo-500 dark:from-gray-800 via-indigo-600 dark:via-gray-900 to-indigo-950 dark:to-gray-950 rounded-md mt-8 w-[90%] flex flex-col h-max px-5 shadow-xl shadow-gray-500 dark:shadow-gray-900">
        <AiOutlineLeft
          className="mt-6 p-1 fill-white cursor-pointer w-10 h-10 hover:bg-indigo-500 dark:hover:bg-indigo-900 rounded-3xl transition"
          onClick={() => navigate("/app/")}
        />
        <h1 className="mt-5 text-3xl text-white break-words flex-wrap font-medium tracking-wide">
          {selectedProject?.title}
        </h1>
        <div className="flex flex-row items-center mt-2 text-xl text-gray-200">
          <AiFillCalendar className="text-2xl mr-1" />
          <p>{`${new Date(selectedProject?.createdAt).getDate()}/${
            new Date(selectedProject?.createdAt).getMonth() + 1
          }/${new Date(selectedProject?.createdAt).getFullYear()}`}</p>
        </div>
        {selectedProject?.error && <h1>El proyecto no existe</h1>}
        <div className="flex flex-row my-4  justify-left w-full gap-2 pb-2">
          <button
            onClick={() =>
              navigate(`/app/project/${id_project}/activity_create`)
            }
            className="flex flex-wrap px-3 py-1 justify-center cursor-pointer bg-white dark:bg-black dark:border-2 dark:border-indigo-600 text-indigo-800 dark:text-white dark:hover:text-black dark:hover:bg-indigo-600 font-medium flex-row items-center gap-1 rounded-sm shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            <AiOutlinePlus /> New activity
          </button>
        </div>
        <hr className="mb-1 border-2 border-indigo-50 dark:border-indigo-500" />
        <p className="mt-4 text2xl text-gray-50 text-xl">
          {selectedProject?.description}
        </p>
        <div className="masonry sm:masonry-sm md:masonry-md">
          {activities &&
            activities.map((activity) => (
              <ActivityCard
                key={activity._id}
                id_project={id_project}
                {...activity}
                className="break-inside"
              />
            ))}
        </div>
      </section>
    </AppLayout>
  );
};
