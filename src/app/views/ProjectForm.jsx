import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppLayout } from "../layout/AppLayout";
import { ProjectContext } from "../../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

export const ProjectForm = () => {
  const {
    register,
    formState: { errors: errorsForm },
    handleSubmit,
  } = useForm();
  const { createProject, loading } = useContext(ProjectContext);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createProject(data);
    if (!loading) {
      navigate("/app/");
    }
  });

  return (
    <AppLayout>
      <section className="flex flex-col lg:w-[50%] h-max px-5 pb-12 rounded-md w-[90%]">
        <AiOutlineLeft
          className="mt-6 p-1 fill-indigo-500 cursor-pointer w-10 h-10 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-3xl transition"
          onClick={() => navigate(-1)}
        />
        <hr className="mt-2 border-2 border-indigo-300" />
        <h1 className="mt-6 text-3xl font-medium text-indigo-900 dark:text-indigo-500">
          New Project
        </h1>
        <form className="flex flex-col mt-7" onSubmit={onSubmit}>
          <label
            htmlFor="title"
            className="text-xl text-indigo-800 dark:text-indigo-500  tracking-wider font-medium"
          >
            Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            name="title"
            placeholder="Project title"
            className="p-1 dark:text-white w-full h-11 mt-2 indent-2 border-2 border-slate-400 rounded outline-none focus:border-indigo-500 transition bg-transparent"
          />
          {errorsForm.title?.type === "required" && (
            <p className="text-red-500 font-medium tracking-wide mt-2">
              Title is required
            </p>
          )}
          <label
            htmlFor="title"
            className="text-xl mt-4 text-indigo-800 dark:text-indigo-500 tracking-wider font-medium"
          >
            Description{" "}
          </label>
          <textarea
            {...register("description", { required: false })}
            placeholder="Something description..."
            className="p-1 dark:text-white h-32 w-full mt-2 indent-2 border-2 border-slate-400 rounded outline-none focus:border-indigo-500 transition bg-transparent"
          ></textarea>
          <button
            disabled={loading}
            className="w-[50%] bg-indigo-600 dark:bg-black dark:border-2 dark:border-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:bg-slate-600 text-white dark:text-indigo-600 hover:dark:text-white mt-5 rounded-sm hover:cursor-pointer font-medium py-1 disabled:cursor-default transition"
          >
            New project
          </button>
        </form>
      </section>
    </AppLayout>
  );
};
