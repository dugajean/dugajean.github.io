import { Sidebar } from "./sections/Sidebar";
import { Main } from "./sections/Main";

export const App = () => (
  <div className="w-full flex justify-center my-0 md:my-12 print:my-0">
    <div className="flex flex-col md:flex-row min-w-96 max-w-screen-lg gap-12 bg-white bg-opacity-70 md:rounded-lg overflow-hidden shadow-xl print:shadow-none">
      <Sidebar />
      <Main />
    </div>
  </div>
);
