import { ButtonLink } from "../components/ButtonLink";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <main className="flex relative overflow-hidden flex-col h-screen justify-center items-center bg-neutral-900 text-white">
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,0,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,0,.15),rgba(255,255,255,0))]"></div>

      <Navbar />
      <section className="md:max-w-3xl max-w-[480px] mb-20 flex flex-col items-center justify-center text-center gap-3">
        <h1 class="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-green-500 to-yellow-400 text-transparent bg-clip-text bg-300% animate-gradient pb-3">
          Task flow.
        </h1>
        <div className="text-neutral-300 lg:text-xl font-semibold bg-neutral-500/50 px-4 py-0.5 rounded-2xl">
          <p>🧪 On working right now!</p>
        </div>
        <p className="text-neutral-100/80  lg:px-4 text-lg lg:text-2xl tracking-tight font-medium">
          A small project management tool to help you a create a list of tasks
          and manage them with ease. Get started by creating an account or
          logging in.
        </p>
        <div className="lg:mt-12 mt-4 text-2xl">
          <ButtonLink
            variant="primary"
            href={"/auth/register"}
            label={"Get Started"}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
