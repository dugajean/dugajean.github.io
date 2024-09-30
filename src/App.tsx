import { Sidebar } from "./sections/Sidebar";
import { Main } from "./sections/Main";
import { Footer } from "./sections/Footer";
import { ResumeProvider } from "./contexts/resumeContext";
import { VFlex } from "./components/Flex";

export const App = () => (
  <ResumeProvider>
    <VFlex alignItems="center" gap="4" className="w-full my-0 lg:my-12 print:my-0">
      <VFlex
        gap="12"
        printGap="4"
        className="content md:flex-row min-w-96 max-w-screen-lg bg-white bg-opacity-70 lg:rounded-lg print:rounded-none shadow-xl print:shadow-none"
      >
        <Sidebar />
        <Main />
      </VFlex>
      <Footer />
    </VFlex>
  </ResumeProvider>
);
