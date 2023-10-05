import { useContext, useEffect, useState } from "react";
import {
  AiFillCalendar,
  AiFillEdit,
  AiFillDelete,
  AiFillEye,
} from "react-icons/ai";
import { getAllActivitiesRequest } from "../../../api/activities";
import { ProjectContext } from "../../../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import { ConfirmDeleteModal } from "../modal/ConfirmDeleteModal";

export const ProjectCard = ({
  title,
  description,
  createdAt,
  _id,
  project,
}) => {
  const { setSelectedProject, deleteProject } = useContext(ProjectContext);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const resp = await getAllActivitiesRequest(_id);
      } catch (error) {
        console.log(error);
      }
    };

    getAllActivities();
  }, []);

  const ViewProject = () => {
    setSelectedProject({ title, description, createdAt, _id, project });
    navigate(`/app/project/${_id}`);
  };

  return (
    <>
      <div className="flex flex-col w-full bg-gray-800 shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium tracking-wide text-gray-300 text-lg">
            {title}
          </h3>
          <div className="flex items-center text-gray-400">
            <AiFillCalendar className="text-xl mr-1" />
            <p>{`${new Date(createdAt).getDate()}/${
              new Date(createdAt).getMonth() + 1
            }/${new Date(createdAt).getFullYear()}`}</p>
          </div>
        </div>
        <p className="text-gray-300 mb-2">
          {description ? `> ${description}` : ""}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="flex items-center gap-2 text-red-600 px-3 py-1 rounded hover:bg-slate-900 hover:text-gray-300 transition"
          >
            <AiFillDelete />
            Delete
          </button>
          <button
            onClick={() => navigate(`/app/project/${_id}/project_update`)}
            className="flex items-center gap-2 text-blue-500 px-3 py-1 rounded hover:bg-slate-900 hover:text-gray-300 transition"
          >
            <AiFillEdit /> Edit
          </button>
          <button
            onClick={ViewProject}
            className="flex items-center gap-2 text-emerald-500 px-3 py-1 rounded hover:bg-slate-900 hover:text-gray-300 transition"
          >
            <AiFillEye /> View
          </button>
        </div>
      </div>
      {toggle && (
        <ConfirmDeleteModal
          action={deleteProject}
          setToggle={setToggle}
          id_project={_id}
          toggle={toggle}
        />
      )}
    </>
  );
};
