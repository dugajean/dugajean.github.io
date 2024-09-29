import { useContext } from "react";
import { ResumeContext } from "../contexts/resumeContext";

export const useResume = () => {
  const resume = useContext(ResumeContext);
  if (!resume) throw new Error("This hook must be used within a ResumeContext.");
  return resume;
};
