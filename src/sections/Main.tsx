import Markdown from "markdown-to-jsx";
import { Experience } from "../components/Experience";
import { useResume } from "../hooks/useResume";

export const Main = () => {
  const resume = useResume();

  return (
    <main className="flex flex-col gap-8 w-full md:w-3/4 pb-12 md:py-24 print:py-12 px-12 md:pr-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <p className="print:text-sm">
          <Markdown>{resume.introduction}</Markdown>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Professional History</h2>
        {resume.experience.map((experience, i) => (
          <Experience key={experience.company} className={i === 2 ? "print:mt-32" : undefined}>
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
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <Experience>
          <Experience.Title>
            {resume.education.degree}, {resume.education.university}
          </Experience.Title>
          <Experience.Duration>
            {resume.education.startDate} - {resume.education.endDate ?? "Present"}
          </Experience.Duration>
        </Experience>
      </div>
    </main>
  );
};
