import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  AiFillSetting,
  AiFillProject,
  AiFillAccountBook,
  AiFillApi,
  AiOutlineLogout,
} from "react-icons/ai";
import { ThemeSwitch } from "./buttons/ThemeSwitch";

export const Navbar = () => {
  const [toggle, setToggle] = useState();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <>
      <div className="fixed z-50 bg-white dark:bg-gray-900 shadow-sm top-0 flex w-full h-14 items-center justify-between px-4">
        <p className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-500 dark:from-indigo-300 to-indigo-600 dark:to-indigo-500">
          Task Flow
        </p>
        <div className="flex flex-row gap-6">
          <button
            onClick={() => navigate("/app/project/project_create")}
            className="text-white  dark:hover:text-gray-950  px-4 py-0.5 dark:bg-black dark:border-2 dark:border-indigo-600 bg-indigo-600 rounded-sm hover:bg-indigo-800 dark:hover:bg-indigo-600  transition duration-200 ease-in-out"
          >
            New project
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="lg:hidden md:block sm:block"
          >
            <AiOutlineMenu className="fill-indigo-600 text-3xl hover:fill-indigo-800 transition duration-200 ease-in-out" />
          </button>
          <div className="hidden lg:flex items-center gap-5">
            <ThemeSwitch />
            <button
              onClick={() => handleLogout()}
              className="flex hover:scale-105 hover:text-indigo-600 dark:text-white transition flex-row gap-2 items-center"
            >
              <AiOutlineLogout />
              Logout
            </button>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="flex lg:hidden z-50 fixed text flex-col gap-4 text-gray-900 top-14 right-0 w-auto rounded-bl-sm h-auto items-end pt-3 pb-4 justify-between px-4 bg-white dark:bg-gray-900 shadow-md">
          {/*           <a
            href=""
            className="transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillAccountBook />
            Account
          </a>
          <a
            href=""
            className="transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillSetting />
            Settings
          </a>

          <a
            href=""
            className="transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillProject />
            My projects
          </a>
          <a
            href=""
            className="transition duration-200 ease-in-out flex items-center gap-2"
          >
            <AiFillApi />
            All stack
          </a> */}
          <ThemeSwitch />
          <button
            onClick={() => handleLogout()}
            href=""
            className="transition dark:text-white  duration-200 ease-in-out flex items-center gap-2"
          >
            <AiOutlineLogout />
            Logout
          </button>
        </div>
      )}
    </>
  );
};
