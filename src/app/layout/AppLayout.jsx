import { Navbar } from "../components/Navbar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-20 mb-12 justify-center flex bg-gray-950">
        {children}
      </div>
    </>
  );
};
