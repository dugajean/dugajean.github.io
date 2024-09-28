import { Sidebar } from "./sections/Sidebar";
import { Main } from "./sections/Main";
import { BoltIcon } from "@heroicons/react/16/solid";

export const App = () => (
  <div className="w-full flex flex-col items-center my-0 md:my-12 print:my-0 gap-2">
    <div className="flex flex-col md:flex-row min-w-96 max-w-screen-lg gap-12 bg-white bg-opacity-70 md:rounded-lg shadow-xl print:shadow-none">
      <Sidebar />
      <Main />
    </div>
    <p className="text-sm text-slate-600 print:hidden">
      Designed and created by Dugi <BoltIcon className="inline w-3 h-3" /> Source code can be found
      on{" "}
      <a
        href="https://github.com/dugajean/dugajean.github.io"
        target="_blank"
        className="underline"
      >
        GitHub
      </a>
    </p>
  </div>
);
