import PropTypes from "prop-types";
import { AlertBadge } from "../badge/AletBadge";

export const InputField = ({
  register,
  errorsForm,
  name,
  type,
  placeholder,
  validation,
  errorMessage,
}) => {
  return (
    <>
      <input
        {...register(name, validation)}
        type={type}
        placeholder={placeholder}
        className="p-2 h-10 border-b-2 outline-none border-neutral-50/50 focus:border-green-500 transition bg-neutral-700 text-neutral-300 font-medium shadow"
      />
      {errorsForm[name]?.type === "required" && (
        <AlertBadge message={errorMessage} />
      )}
    </>
  );
};

InputField.propTypes = {
  register: PropTypes.func,
  errorsForm: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.object,
  errorMessage: PropTypes.string,
};
