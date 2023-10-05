import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppLayout } from "../layout/AppLayout";
import { ProjectContext } from "../../context/ProjectContext";
import { useNavigate, useParams } from "react-router-dom";
import { ActivityContext } from "../../context/ActivityContext";
import { AiOutlineLeft } from "react-icons/ai";

export const ActivityCreateForm = () => {
  const {
    register,
    formState: { errors: errorsForm },
    handleSubmit,
  } = useForm();

  const { id_project } = useParams();
  const { createActivity } = useContext(ActivityContext);

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createActivity(id_project, data);
    navigate(-1);
  });

  return (
    <AppLayout>
      <section className="flex flex-col h-max px-5 pb-12 rounded-md shadow-2xl bg-gray-900 w-[90%]">
        <AiOutlineLeft
          className="mt-6 p-1 text-gray-400 cursor-pointer w-10 h-10 hover:bg-gray-800 rounded-3xl transition"
          onClick={() => navigate(-1)}
        />
        <hr className="mt-4 mb-1 border-gray-700" />
        <h1 className="mt-4 text-3xl text-gray-300">New activity 📝</h1>
        <form className="flex flex-col mt-7 gap-6" onSubmit={onSubmit}>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Activity title"
            className="p-1 w-full h-11 indent-2 border-b-4 outline-none border-b-slate-500 focus:border-b-cyan-500 transition bg-slate-700 text-gray-300"
          />
          {errorsForm.title?.type === "required" && (
            <p className="text-red-500 -mt-4">Title is required</p>
          )}
          <textarea
            {...register("description", { required: false })}
            placeholder="Something description..."
            className="p-1 px-2 h-32 indent-2 border-b-4 outline-none border-b-slate-500 focus:border-b-cyan-500 transition bg-slate-700 text-gray-300"
          ></textarea>
          <button className="w-[50%] bg-cyan-500 font-medium py-0.5 rounded">
            New Activity
          </button>
        </form>
      </section>
    </AppLayout>
  );
};
