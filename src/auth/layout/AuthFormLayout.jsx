import PropTypes from "prop-types";
import { Navbar } from "../../public/components/Navbar";

/**
 * Renders a layout for authentication forms.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to render within the layout.
 * @param {string} props.title - The title of the form.
 * @param {string} props.info - Additional information about the form.
 * @returns {JSX.Element} The rendered component.
 */
export const AuthFormLayout = ({ children, title, info }) => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-[100vh] bg-neutral-900">
        <div className="flex flex-col max-w-lg w-full bg-neutral-800 h-auto px-10 py-8 rounded shadow-2xl transition-transform">
          <h1 className="font-medium text-left text-3xl tracking-wider text-neutral-200">
            {title}
          </h1>
          <p className=" mt-1 text-lg text-neutral-400 font-medium">
            {info}
          </p>
          {children}
        </div>
      </section>
    </>
  );
};

AuthFormLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
