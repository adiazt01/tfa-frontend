import { ButtonLink } from "./ButtonLink";
import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <header className="fixed bottom-0 h-20 border-t bg-neutral-800/20 backdrop-blur-md border-black/10 shadow w-full flex justify-center items-center p-5">
      <div className="flex w-full max-w-6xl flex-row justify-between items-center gap-4">
        <h2 className="font-semibold text-xl">
          <span role="img" aria-label="footer-icon">
            🚀
          </span>
          Developed by{" "} Armando Diaz
        </h2>
        <ul className="flex flex-row gap-6 items-center">
          <li>
            <ButtonLink
              variant="link"
              href={"https://github.com/adiazt01/tfa-frontend"}
              label={"Github"}
              icon={<Github />}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
