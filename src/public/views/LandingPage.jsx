import { Link } from "react-router-dom";

export const LandingPage = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-900 text-white">
      <header className="absolute top-0 left-0 w-full flex justify-between p-5">
        <h1 className="font-semibold text-xl">📃TaskFlow</h1>
        <nav>
          <Link
            to="/auth/login"
            className="text-blue-500 hover:text-blue-400 mx-2"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="text-blue-500 hover:text-blue-400 mx-2"
          >
            Register
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome to TaskFlow</h2>
        <p className="text-lg">
          Your solution for efficient project management.
        </p>
      </main>
    </div>
  );
};
