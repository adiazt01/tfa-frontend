import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa"; // Importa los iconos que necesitas

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
    onClick={toggleTheme}
    className={`relative w-14 h-7 rounded-full shadow-inner flex items-center justify-between px-1 transition-colors ${
      theme === "dark" ? "bg-blue-600" : "bg-gray-300"
    }`}
  >
    {theme === 'dark' ? <FaMoon className="order-first" /> : <FaSun className="order-last" />}
    <span
      className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white shadow transform transition-transform ${
        theme === "dark" ? "translate-x-full" : "translate-x-0"
      }`}
    />
  </button>
  
  );
};
