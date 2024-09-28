import { Sidebar } from "./sections/Sidebar";
import { Main } from "./sections/Main";
import { BoltIcon } from "@heroicons/react/16/solid";

export const App = () => (
  <div className="w-full flex flex-col items-center my-0 md:my-12 print:my-0 gap-4">
    <div className="flex flex-col md:flex-row min-w-96 max-w-screen-lg gap-12 print:gap-4 content bg-white bg-opacity-70 md:rounded-lg print:rounded-none shadow-xl print:shadow-none">
      <Sidebar />
      <Main />
    </div>
    <footer className="text-sm text-slate-600 mx-4 mb-4 print:hidden">
      Designed and created by Dugi <BoltIcon className="inline w-3 h-3" /> Source code can be found
      on{" "}
      <a
        href="https://github.com/dugajean/dugajean.github.io"
        target="_blank"
        className="underline"
      >
        GitHub
      </a>
    </footer>
  </div>
);
