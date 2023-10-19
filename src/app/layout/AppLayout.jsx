import { Navbar } from "../components/Navbar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-auto bg-gray-50 dark:bg-gray-900 min-h-[100vh] pt-14 pb-12 justify-center items-start flex flex-wrap">
        {children}
      </div>
    </>
  );
};
