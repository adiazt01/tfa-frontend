import PropTypes from "prop-types";
import { Navbar } from "../../public/components/Navbar";
import { Footer } from "../../public/components/Footer";

export const AuthFormLayout = ({ children, title }) => {
  return (
    <>
    <Navbar/>
    <section className="flex flex-col items-center justify-center h-[100vh] bg-neutral-900">
      <div className="flex flex-col max-w-lg w-full bg-neutral-800 h-auto px-10 py-8 rounded shadow-2xl transition-transform">
        <h1 className="text-center text-3xl tracking-wider text-gray-300">
          {title}
        </h1>
        {children}
      </div>
    </section>
    <Footer/>
    </>
  );
};

AuthFormLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
