import { AtSymbolIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useResume } from "../hooks/useResume";
import { SkillsList } from "../components/SkillsList";

export const Sidebar = () => {
  const resume = useResume();

  return (
    <aside className="bg-indigo-800 bg-opacity-70 w-full md:w-1/4 px-12 py-12 print:py-8 md:py-24 lg:rounded-tl-lg lg:rounded-bl-lg print:rounded-none">
      <div className="flex flex-col md:sticky print:static md:top-16 md:items-center text-white gap-4">
        <div className="w-40 md:w-24 lg:w-32 h-40 md:h-24 lg:h-32 self-center">
          <img
            loading="lazy"
            src="/self.webp"
            alt="Dugi's photo"
            className="block w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-8 print:gap-4">
          <div className="flex justify-between md:flex-col gap-8">
            <section>
              <h1 className="text-2xl font-bold whitespace-nowrap">{resume.name}</h1>
              <p className="uppercase text-xs font-normal">{resume.title}</p>
            </section>
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" />
                <p aria-label="Dugi's location" className="text-sm whitespace-nowrap">
                  {resume.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <AtSymbolIcon className="w-5 h-5" />
                <p className="text-sm">
                  <a
                    aria-label="Dugi's email address"
                    href={`mailto:${resume.contact.email}`}
                    className="hover:underline print:underline"
                  >
                    {resume.contact.email}
                  </a>
                </p>
              </div>
            </section>
          </div>
          <section className="flex flex-col gap-4">
            <h2>Skills</h2>
            <SkillsList label="Languages" items={resume.skills.languages} />
            <SkillsList label="Frameworks and libraries" items={resume.skills.frameworks} />
            <SkillsList label="Miscellaneous" items={resume.skills.misc} />
          </section>
        </div>
      </div>
    </aside>
  );
};
