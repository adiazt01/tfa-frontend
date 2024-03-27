import { Link } from "react-router-dom";

export const ButtonLink = ({ variant = "primary", label, href, icon }) => {
  if (variant === "primary") {
    return (
      <Link
        to={href}
        className="text-white font-semibold bg-green-600 px-5 py-1 rounded border border-green-600 hover:bg-green-500 hover:scale-105 hover:border-green-500 transition outline-none focus:outline-none shadow"
      >
        {label}
      </Link>
    );
  } else if (variant === "outline") {
    return (
      <Link
        to={href}
        className="text-green-600 font-semibold px-5 py-1 rounded border-2 border-green-700 hover:text-green-300 hover:scale-105 hover:border-green-300 transition"
      >
        {label}
      </Link>
    );
  } else if (variant === "link") {
    return (
      <Link
        to={href}
        className="text-neutral-300 font-medium hover:text-green-200 transition flex flex-row items-start"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span>{label}</span>
      </Link>
    );
  }
};
