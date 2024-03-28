import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SendButton } from "../components/SendButton";
import { AuthFormLayout } from "../layout/AuthFormLayout";
import { InputField } from "../../app/components/inputs/InputForm";
import { AlertBadge } from "../../app/components/badge/AletBadge";

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
      navigate("/app/");
    }
  }, [authenticated]);

  return (
    <AuthFormLayout
      title={"Login"}
      info={"Login to access all the features that our app offers."}
    >
      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
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
          <Link
            to="/auth/register"
            className="text-green-500 hover:text-green-400"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </AuthFormLayout>
  );
};
