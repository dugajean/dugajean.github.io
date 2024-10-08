import { useResume } from "./useResume";

export const useName = () => {
  const resume = useResume();
  const urlSeach = new URLSearchParams(window.location.search);
  const useAltName = urlSeach.get("altName") === "true";

  const fullName = useAltName ? resume.altName : resume.name;
  const [firstName] = fullName.split(" ");

  return { fullName, firstName, useAltName };
};
