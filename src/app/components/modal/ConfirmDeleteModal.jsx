import { useNavigate } from "react-router-dom";

export const ConfirmDeleteModal = ({
  action,
  setToggle,
  toggle,
  id_project,
}) => {
  const navigate = useNavigate();
  const deleteProject = (id_project) => {
    action(id_project);
    setToggle(!toggle);
    navigate(0);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0 bg-black bg-opacity-20 backdrop-blur-md">
      <div className="bg-gray-900 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">
            Confirm the deletion
          </h2>
          <p className="text-gray-200">Are you sure you want to delete it?</p>
          <p className="text-sm text-gray-300 mt-2">
            Once deleted, you will not be able to recover it.
          </p>
        </div>
        <div className="flex justify-end items-center p-4 rounded-b-lg">
          <button
            onClick={() => deleteProject(id_project)}
            className="px-4 py-2 transition text-white bg-red-600 rounded hover:bg-red-500 mr-2"
          >
            Delete
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="px-4 py-2 transition text-gray-300 bg-gray-800 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
