import { useContext, useState } from "react";
import { useEffect } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillFileAdd,
  AiFillFlag,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineEdit,
} from "react-icons/ai";
import { ActivityContext } from "../../../context/ActivityContext";

const renderTask = (
  status,
  tasks,
  id_project,
  id_activity,
  updateTaskStatus,
  deleteTaskUpdate,
  navigate
) => {
  const buttonActions = {
    Doing: ["To complete", "Complete"],
    "To complete": ["Doing", "Complete"],
    Complete: ["Doing", "To complete"],
  };

  const statusColors = {
    Complete: "bg-green-500 dark:bg-green-700",
    "To complete": "bg-orange-500 dark:bg-orange-700",
    Doing: "bg-blue-500 dark:bg-blue-700",
  };
  let colorBanner = statusColors[status];

  return (
    <div className="grid gap-4">
      {tasks
        .filter((task) => task.status === status)
        .map((task, i) => {
          const { title, description, status, _id: id_task } = task;
          return (
            <div key={i} className="flex flex-col shadow-lg overflow-hidden">
              <div
                className={`${colorBanner} py-2 px-4 gap-2 flex justify-between`}
              >
                <h2 className="text-lg font-semibold text-white flex-grow truncate">
                  {title}
                </h2>
                <button
                  onClick={() =>
                    navigate(`activity/${id_activity}/${id_task}/task_update`)
                  }
                >
                  <AiOutlineEdit className="text-xl transition hover:scale-125 text-white" />
                </button>
                <button
                onClick={() =>
                    deleteTaskUpdate(id_project, id_activity, id_task)
                  }
                >
                  <AiOutlineClose className="text-xl transition hover:scale-125 text-white" />
                </button>
              </div>
              <div className="px-4 bg-white dark:bg-gray-800">
                <div className="flex items-center text-gray-900 dark:text-gray-300  mt-2">
                  <AiFillFlag className="text-md  mr-2" />
                  <p className="text-sm font-semibold">Due: 12/08/2023</p>
                </div>
                <p
                  className="text-sm mt-1 text-gray-900 dark:text-gray-200"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {description}
                </p>
              </div>
              <div className="flex w-full justify-around bg-white dark:bg-gray-800 p-2">
                {buttonActions[status].map((actionStatus) =>
                  renderButton(
                    actionStatus,
                    id_project,
                    id_activity,
                    id_task,
                    updateTaskStatus,
                    colorBanner
                  )
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

const renderButton = (
  status,
  id_project,
  id_activity,
  id_task,
  updateTaskStatus
) => {
  const statusColors = {
    Complete: "hover:bg-green-500 dark:hover:bg-green-700",
    "To complete": "hover:bg-orange-500 dark:hover:bg-orange-700",
    Doing: "hover:bg-blue-500 dark:hover:bg-blue-700",
  };

  let hoverColor = statusColors[status];

  return (
    <button
      onClick={() =>
        updateTaskStatus(id_project, id_activity, id_task, {
          status,
        })
      }
      className={`py-2 w-full px-4 m-2 text-gray-400 dark:text-gray-300 transition duration-200 ease-in-out ${hoverColor} hover:text-white truncate rounded`}
    >
      {status}
    </button>
  );
};

export const ActivityCard = ({
  title,
  description,
  id_project,
  _id: id_activity,
}) => {
  const { getAllTasks, updateTask, deleteTask } = useContext(TaskContext);
  const { deleteActivity } = useContext(ActivityContext);
  const [tasks, setTasks] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getTasks = async () => {
      const resp = await getAllTasks(id_project, id_activity);
      setTasks(resp.data);
    };
    getTasks();
  }, []);

  const deleteActivityHandler = async (id_project, id_activity) => {
    await deleteActivity(id_project, id_activity);
  };

  const updateTaskStatus = async (id_project, id_activity, id_task, status) => {
    await updateTask(id_project, id_activity, id_task, status);
    const resp = await getAllTasks(id_project, id_activity);
    setTasks(resp.data);
  };

  const deleteTaskUpdate = async (id_project, id_activity, id_task) => {
    setTasks((tasks) => tasks.filter((task) => task._id != id_task));
    await deleteTask(id_project, id_activity, id_task);
  };

  return (
    <div className="flex flex-col mt-4 pb-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
      <div className="flex items-center justify-end mt-2 px-4 py-2">
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`${id_activity}/activity_update`)}
            className="py-2 shadow-xl px-2 rounded-3xl mr-2 scale-110 bg-blue-500 dark:bg-blue-800 text-white transition-all duration-200 ease-in-out hover:bg-blue-600 dark:hover:bg-blue-900  hover:scale-125"
          >
            <AiFillEdit className="mx-auto" />
          </button>
          <button
            onClick={() => deleteActivityHandler(id_project, id_activity)}
            className="py-2 shadow-xl px-2 rounded-3xl mr-2 scale-110 bg-red-500 dark:bg-red-800 text-white transition-all duration-200 ease-in-out hover:bg-red-600 dark:hover:bg-red-900  hover:scale-125"
          >
            <AiFillDelete className="mx-auto" />
          </button>
          <button
            onClick={() =>
              navigate(
                `/app/project/${id_project}/activity/${id_activity}/task_create`
              )
            }
            className="py-2 shadow-xl px-2 rounded-3xl mr-2 scale-110 bg-green-500 dark:bg-green-800 text-white transition-all duration-200 ease-in-out hover:bg-green-600 dark:hover:bg-green-900  hover:scale-125"
          >
            <AiFillFileAdd className="mx-auto" />
          </button>
          {/*           <button
            onClick={() => editActivityHandler(id_project, id_activity)}
            className="py-2 shadow-xl px-2 rounded-3xl mr-2 scale-110 bg-green-500 text-white transition-all duration-200 ease-in-out hover:bg-green-600 hover:scale-125"
          >
            <AiOutlineCheck className="mx-auto" />
          </button> */}
        </div>
      </div>
      <h2 className="text-lg mt-2 font-semibold text-left text-gray-800 dark:text-gray-300 py-1 truncate px-4">
        {title}
      </h2>
      {description && (
        <p className="px-4 mb-2 mt-1 text-gray-700 dark:text-gray-400">
          {description}
        </p>
      )}
      <div className="px-4 gap-4">
        {tasks?.length > 0 ? (
          <>
            <h2 className="mt-4 text-center text-xl text-gray-800 dark:text-gray-300">
              Doing ⚒️
            </h2>
            <hr className="mt-2 gap-2 mb-4 border-indigo-500 dark:border-indigo-700 border-2 rounded-lg" />
            {renderTask(
              "Doing",
              tasks,
              id_project,
              id_activity,
              updateTaskStatus,
              deleteTaskUpdate,
              navigate
            )}
          </>
        ) : null}
      </div>
      <div className="px-4">
        {tasks?.length > 0 ? (
          <>
            <h2 className="mt-4 text-center text-xl text-gray-800 dark:text-gray-300">
              To complete 💤
            </h2>
            <hr className="mt-2 mb-4 border-orange-500 dark:border-orange-700 border-2 rounded-lg" />
            {renderTask(
              "To complete",
              tasks,
              id_project,
              id_activity,
              updateTaskStatus,
              deleteTaskUpdate,
              navigate
            )}
          </>
        ) : null}
      </div>
      <div className="px-4">
        {tasks?.length > 0 ? (
          <>
            <h2 className="mt-4 text-center text-xl text-gray-800 dark:text-gray-300">
              Complete ✅
            </h2>
            <hr className="mt-2 mb-4 border-green-500 dark:border-green-700 border-2 rounded-lg" />
            {renderTask(
              "Complete",
              tasks,
              id_project,
              id_activity,
              updateTaskStatus,
              deleteTaskUpdate,
              navigate
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};
