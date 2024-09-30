import { BoltIcon } from "@heroicons/react/16/solid";

export const Footer = () => (
  <footer className="text-sm text-slate-600 mx-4 mb-4 print:hidden">
    Designed and created by Dugi <BoltIcon className="inline w-3 h-3" /> Source code can be found on{" "}
    <a
      href="https://github.com/dugajean/dugajean.github.io"
      target="_blank"
      className="hover:underline text-pink-700"
    >
      GitHub
    </a>
  </footer>
);
