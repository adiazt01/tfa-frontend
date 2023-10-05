import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppLayout } from "../layout/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { TaskContext } from "../../context/TaskContext";

export const TaskUpdateForm = () => {
  const {
    register,
    formState: { errors: errorsForm },
    handleSubmit,
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { id_project, id_activity, id_task } = useParams();
  const { getTask, selectedTask, updateTask } = useContext(TaskContext);

  useEffect(() => {
    getTask(id_project, id_activity, id_task);
  }, []);

  useEffect(() => {
    if (selectedTask) {
      setValue("title", selectedTask.title);
      setValue("description", selectedTask.description);
    }
  }, [selectedTask]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await updateTask(id_project, id_activity, id_task, data);
    navigate(-1);
  });

  console.log(selectedTask);

  return (
    <AppLayout>
      <section className="flex flex-col h-max px-5 pb-12 rounded-md shadow-2xl bg-gray-900 w-[90%]">
        <AiOutlineLeft
          className="mt-6 p-1 text-gray-400 cursor-pointer w-10 h-10 hover:bg-gray-800 rounded-3xl transition"
          onClick={() => navigate(-1)}
        />
        <hr className="mt-4 mb-1 border-gray-700" />
        <h1 className="mt-4 text-3xl text-gray-300">Update task</h1>
        <form className="flex flex-col mt-7 gap-6" onSubmit={onSubmit}>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Task title"
            className="p-1 w-full h-11 indent-2 border-b-4 outline-none border-b-slate-500 focus:border-b-cyan-500 transition bg-slate-700 text-gray-300"
          />
          {errorsForm.title?.type === "required" && (
            <p className="text-red-500 -mt-4">Title is required</p>
          )}
          <textarea
            {...register("description", { required: false })}
            placeholder="Something description..."
            className="p-1 px-2 h-32 border-b-4 outline-none border-b-slate-500 focus:border-b-cyan-500 transition bg-slate-700 text-gray-300"
          ></textarea>
          <button className="w-[50%] bg-cyan-500 font-medium py-0.5 rounded">
            Update
          </button>
        </form>
      </section>
    </AppLayout>
  );
};
