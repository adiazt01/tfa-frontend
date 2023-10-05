import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SendButton } from "../components/SendButton";
import { AuthFormLayout } from "../layout/AuthFormLayout";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: errorsForm },
  } = useForm();
  const navigate = useNavigate();
  const { login, errors, authenticated } = useContext(AuthContext);

  const onSubmit = handleSubmit(async (data) => {
    await login(data);
  });

  useEffect(() => {
    if (authenticated) {
      navigate('/app/')
    }
  }, [authenticated])

  return (
    <AuthFormLayout title={"Login"}>
      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="Email"
          className="p-2 h-10 border-b-2 outline-none border-gray-300 focus:border-blue-500 transition bg-white text-gray-900"
        />
        {errorsForm.email?.type === "required" && (
          <p className="text-red-500 -mt-4">Email is required</p>
        )}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="p-2 h-10 border-b-2 outline-none border-gray-300 focus:border-blue-500 transition bg-white text-gray-900"
        />
        {errorsForm.password?.type === "required" && (
          <p className="text-red-500 -mt-4">Password is required</p>
        )}
        {errors && (
          <div className="flex flex-col border-2 rounded bg-red-900 border-red-800 py-2 px-2">
            <p className="text-gray-200">
              <span className="text-gray-100">Ops!</span> Some thing went wrong
            </p>
            {errors.error.map((error, i) => (
              <p className="text-left text-gray-300" key={i}>
                ⚠️{error}
              </p>
            ))}
          </div>
        )}
        <SendButton label={"Login"} />
      </form>
      <div className="mt-4">
        <p className="text-center text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link to="/auth/register" className="text-blue-500 hover:text-blue-400">
            Regístrate
          </Link>
        </p>
      </div>
    </AuthFormLayout>
  );
};