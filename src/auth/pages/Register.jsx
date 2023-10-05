import { Link, useNavigate } from "react-router-dom";
import { AuthFormLayout } from "../layout/AuthFormLayout";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { SendButton } from "../components/SendButton";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: errorsForm },
  } = useForm();
  const navigate = useNavigate();
  const {
    register: registerAuth,
    errors,
    authenticated,
  } = useContext(AuthContext);

  const onSubmit = handleSubmit(async (data) => {
    await registerAuth(data);
  });

  useEffect(() => {
    if (authenticated) {
      navigate("/app/");
    }
  }, [authenticated]);

  return (
    <AuthFormLayout title={"Register"}>
      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
        <input
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
          className="p-2 h-10 border-b-2 outline-none border-gray-300 focus:border-blue-500 transition bg-white text-gray-900"
        />
        {errorsForm.username?.type === "required" && (
          <p className="text-red-500 -mt-4">Username is required</p>
        )}
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
        <input
          {...register("confirmPassword", { required: true })}
          type="password"
          placeholder="Confirm your password"
          className="p-2 h-10 border-b-2 outline-none border-gray-300 focus:border-blue-500 transition bg-white text-gray-900"
        />
        {errorsForm.passwordConfirm?.type === "required" && (
          <p className="text-red-500 -mt-4">Password confirm is required</p>
        )}
        {errors && (
          <div className="flex flex-col border-l-4 border-red-500 rounded bg-red-50 p-4 mt-2">
            <p className="text-sm text-red-700">Oops! Something went wrong.</p>
            {errors.error.map((error, i) => (
              <p className="text-sm text-red-700" key={i}>
                ⚠️{error}
              </p>
            ))}
          </div>
        )}
        <SendButton label={"Register"} />
      </form>
      <div className="mt-4">
        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </AuthFormLayout>
  );
};
