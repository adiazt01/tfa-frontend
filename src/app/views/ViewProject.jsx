import { useContext, useEffect } from "react";
import { AppLayout } from "../layout/AppLayout";
import { ProjectContext } from "../../context/ProjectContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  AiFillCalendar,
  AiFillTag,
  AiOutlineLeft,
  AiOutlinePaperClip,
  AiOutlinePlus,
} from "react-icons/ai";
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

  console.log(activities);

  return (
    <AppLayout>
      <section className="flex flex-col h-max px-5 pb-12 rounded-md shadow-2xl bg-gray-900 w-[90%]">
        <AiOutlineLeft
          className="mt-6 p-1 text-gray-400 cursor-pointer w-10 h-10 hover:bg-gray-800 rounded-3xl transition"
          onClick={() => navigate("/app/")}
        />
        
        <h1 className="mt-5 text-3xl text-gray-300">
          {selectedProject?.title}
        </h1>

        <div className="flex flex-row items-center mt-2 text-xl text-gray-400">
          <AiFillCalendar className="text-2xl mr-1" />
          <p>{`${new Date(selectedProject?.createdAt).getDate()}/${
            new Date(selectedProject?.createdAt).getMonth() + 1
          }/${new Date(selectedProject?.createdAt).getFullYear()}`}</p>
        </div>
        {selectedProject?.error && <h1>El proyecto no existe</h1>}

        <div className="flex flex-row mt-2 justify-left w-full gap-2 pb-2">
          <button
            onClick={() =>
              navigate(`/app/project/${id_project}/activity_create`)
            }
            className="flex flex-wrap justify-center cursor-pointer bg-emerald-800 text-gray-300 flex-row items-center gap-1  px-3 py-1 rounded-sm hover:bg-emerald-700 hover:text-gray-300 transition"
          >
            <AiOutlinePlus /> New activity
          </button>
        </div>
        <hr className="mt-2 mb-1 border-gray-700" />
        <p className="mt-4 text2xl text-gray-400">
          {selectedProject?.description}
        </p>
        <div>
          {activities?.map((activity) => (
            <ActivityCard
              key={activity._id}
              id_project={id_project}
              {...activity}
            />
          ))}
        </div>
      </section>
    </AppLayout>
  );
};
