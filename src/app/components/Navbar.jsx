import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  AiFillHome,
  AiFillSetting,
  AiFillProject,
  AiFillAccountBook,
  AiFillApi,
  AiOutlineLogout,
} from "react-icons/ai";

export const Navbar = () => {
  const [toggle, setToggle] = useState();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(0)
  }
  return (
    <>
      <div className="fixed z-50 top-0 flex w-full h-14 items-center justify-between px-4 bg-slate-900 shadow-md">
        <p className="text-gray-200 font-semibold text-xl">📃TaskFlow</p>
        <div className="flex flex-row gap-8">
          <button
            onClick={() => navigate("/app/project/project_create")}
            className="text-gray-950 font-medium bg-cyan-500 px-4 py-0.5 rounded hover:bg-cyan-600 transition duration-200 ease-in-out"
          >
            Project +
          </button>
          <button onClick={() => setToggle(!toggle)}>
            <AiOutlineMenu className="fill-cyan-400 text-2xl hover:text-cyan-500 transition duration-200 ease-in-out" />
          </button>
        </div>
      </div>
      {toggle && (
        <div className="flex fixed text flex-col gap-4 text-gray-300 top-14 right-0 w-[50vw] rounded-bl-sm h-auto items-start pt-3 pb-4 justify-between px-4 bg-slate-900 shadow-md">
          <a
            href=""
            className="hover:text-white transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillAccountBook />
            Account
          </a>
          <a
            href=""
            className="hover:text-white transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillSetting />
            Settings
          </a>

          <a
            href=""
            className="hover:text-white transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillProject />
            My projects
          </a>
          <a
            href=""
            className="hover:text-white transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillApi />
            All stack
          </a>
          <button
            onClick={() => handleLogout()}
            href=""
            className="hover:text-white transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiOutlineLogout />
            Logout
          </button>
        </div>
      )}
    </>
  );
};
