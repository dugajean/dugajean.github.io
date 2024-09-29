import { createContext, PropsWithChildren } from "react";
import resumeJson from "../resume.json";

export type Resume = typeof resumeJson;

export const ResumeContext = createContext<Resume>(resumeJson);

export const ResumeProvider = ({ children }: PropsWithChildren) => (
  <ResumeContext.Provider value={resumeJson}>{children}</ResumeContext.Provider>
);
