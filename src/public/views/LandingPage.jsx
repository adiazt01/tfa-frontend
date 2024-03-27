import { Link } from "react-router-dom";

export const LandingPage = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-gray-900 text-white">
      <header className="fixed top-0 h-14 border-b bg-gray-900 border-black/10 shadow w-full flex items-center justify-between p-5">
        <h1 className="font-semibold text-xl">📃TaskFlow</h1>
        <nav className="flex flex-row gap-4 items-center">
          <Link
            to="/auth/login"
            className="text-blue-500 px-5 border-blue-500 py-1 rounded-lg border-2 hover:text-white hover:border-white transition"
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

      <section className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome to TaskFlow</h2>
        <p className="text-lg">
          Your solution for efficient project management.
        </p>
      </section>
    </main>
  );
};
