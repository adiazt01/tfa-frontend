import { Link } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";

export const Navbar = () => {
  return (
    <header className="fixed top-0 h-20 border-b bg-neutral-800/20 backdrop-blur-md border-black/10 shadow w-full flex items-center justify-center p-5">
      <div className="flex w-full max-w-6xl flex-row justify-between items-center gap-4">
        <h1 className="font-semibold text-xl">📃TaskFlow</h1>
        <nav className="flex flex-row gap-6 items-center">
          <ButtonLink variant="outline" href={"/auth/login"} label={"Login"} />
          <ButtonLink href={"/auth/register"} label={"Register"} />
        </nav>
      </div>
    </header>
  );
};
