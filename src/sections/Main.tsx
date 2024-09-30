import Markdown from "markdown-to-jsx";
import { Experience } from "../components/Experience";
import { useResume } from "../hooks/useResume";
import { VFlex } from "../components/Flex";

export const Main = () => {
  const resume = useResume();

  return (
    <VFlex
      as="main"
      gap="8"
      printGap="2"
      className="w-full md:w-3/4 pb-12 md:py-24 print:py-8 px-12 print:px-6 md:pr-16"
    >
      <VFlex gap="4" printGap="2">
        <h2>Introduction</h2>
        <p className="print:text-xs">
          <Markdown>{resume.introduction}</Markdown>
        </p>
      </VFlex>
      <VFlex gap="4" printGap="2">
        <h2>Professional History</h2>
        {resume.experience.map((experience) => (
          <Experience key={experience.company}>
            <Experience.Title>
              {experience.role}, {experience.company}
              {experience.company ? " — " : ""}
              {experience.location}
            </Experience.Title>
            <Experience.Duration>
              {experience.startDate} - {experience.endDate ?? "Present"}
            </Experience.Duration>
            <Experience.Description>
              <Markdown>{experience.description ?? ""}</Markdown>
            </Experience.Description>
            {(experience.accomplishments ?? []).map((accomplishment) => (
              <Experience.Bullet key={accomplishment}>
                <Markdown>{accomplishment}</Markdown>
              </Experience.Bullet>
            ))}
          </Experience>
        ))}
      </VFlex>
      <VFlex gap="4" printGap="2">
        <h2>Education</h2>
        <Experience>
          <Experience.Title>
            {resume.education.degree}, {resume.education.university}
          </Experience.Title>
        </Experience>
      </VFlex>
    </VFlex>
  );
};
