import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppLayout } from "../layout/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { TaskContext } from "../../context/TaskContext";

export const TaskCreateForm = () => {
  const {
    register,
    formState: { errors: errorsForm },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const { id_project, id_activity } = useParams();
  const { createTask, loading } = useContext(TaskContext);


  const onSubmit = handleSubmit( async (data) => {
    await createTask(id_project, id_activity,data);
    if (!loading) {
      navigate(-1);
    }
  });

  return (
   <AppLayout>
      <section className="flex lg:w-[50%] flex-col h-max px-5 pb-12 w-[90%]">
      <AiOutlineLeft
          className="mt-6 p-1 fill-indigo-500 cursor-pointer w-10 h-10 hover:bg-indigo-50 rounded-3xl transition"
          onClick={() => navigate(-1)}
        />
        <hr className="mt-2 border-2 border-indigo-300" />
        <h1 className="mt-4 text-3xl text-green-900 dark:text-green-500 font-medium">New task</h1>
        <form className="flex flex-col mt-7" onSubmit={onSubmit}>
          <label
            htmlFor="title"
            className="text-xl text-green-800 dark:text-green-500 tracking-wider font-medium"
          >
            Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            name="title"
            placeholder="Task title"
            className="p-1 dark:text-white w-full h-11 mt-2 indent-2 border-2 border-slate-400 rounded outline-none focus:border-green-500 transition bg-transparent"
          />
          {errorsForm.title?.type === "required" && (
            <p className="text-red-500 font-medium tracking-wide mt-2">
              Title is required
            </p>
          )}
          <label
            htmlFor="title"
            className="text-xl mt-4 text-green-800 dark:text-green-500 tracking-wider font-medium"
          >
            Description
          </label>
          <textarea
            {...register("description", { required: false })}
            placeholder="Something description..."
            className="p-1 dark:text-white h-32 w-full mt-2 indent-2 border-2 border-slate-400 rounded outline-none focus:border-green-500 transition bg-transparent"
          ></textarea>
          <button
            disabled={loading}
            className="w-[50%] bg-green-600 dark:bg-black dark:border-2 dark:border-green-600 hover:bg-green-700 dark:hover:bg-green-600 disabled:bg-slate-600 text-white dark:text-green-600 hover:dark:text-white mt-5 rounded-sm hover:cursor-pointer font-medium py-1 disabled:cursor-default transition"
          >
            New project
          </button>
        </form>
      </section>
    </AppLayout>
  );
};
