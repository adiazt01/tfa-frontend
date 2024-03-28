import { Link, useNavigate } from "react-router-dom";
import { AuthFormLayout } from "../layout/AuthFormLayout";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { SendButton } from "../components/SendButton";
import { AlertBadge } from "../../app/components/badge/AletBadge";
import { InputField } from "../../app/components/inputs/InputForm";

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
    <AuthFormLayout title={"Register"} info={
      "Create an account to access all the features that our app offers."
    }>
      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
        <InputField
          register={register}
          errorsForm={errorsForm}
          name="username"
          type="text"
          placeholder="Username"
          validation={{ required: true }}
          errorMessage="Username is required"
        />
        {errorsForm.username?.type === "required" && (
          <AlertBadge message={"Username is required"} />
        )}
        <InputField
          register={register}
          errorsForm={errorsForm}
          name="email"
          type="email"
          placeholder="Email"
          validation={{ required: true }}
          errorMessage="Email is required"
        />
        {errorsForm.email?.type === "required" && (
          <AlertBadge message={"Email is required"} />
        )}
        <InputField
          register={register}
          errorsForm={errorsForm}
          name="password"
          type="password"
          placeholder="Password"
          validation={{ required: true }}
          errorMessage="Password is required"
        />
        {errorsForm.password?.type === "required" && (
          <AlertBadge message={"Password is required"} />
        )}
        <InputField
          register={register}
          errorsForm={errorsForm}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          validation={{ required: true }}
          errorMessage="Password confirmation is required"
        />
        {errorsForm.confirmPassword?.type === "required" && (
          <AlertBadge message={"Password confirmation is required"} />
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
      <div className="mt-7">
        <p className="text-center font-medium text-lg text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-green-500 hover:text-green-400 transition font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthFormLayout>
  );
};
