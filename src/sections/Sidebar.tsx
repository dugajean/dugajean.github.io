import { AtSymbolIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useResume } from "../hooks/useResume";
import { SkillsList } from "../components/SkillsList";
import { HFlex, VFlex } from "../components/Flex";

export const Sidebar = () => {
  const resume = useResume();

  return (
    <aside className="bg-indigo-800 bg-opacity-70 w-full md:w-1/4 px-12 py-12 print:py-8 md:py-24 lg:rounded-tl-lg lg:rounded-bl-lg print:rounded-none">
      <VFlex gap="4" className="md:sticky print:static md:top-16 md:items-center text-white">
        <div className="w-40 md:w-24 lg:w-32 h-40 md:h-24 lg:h-32 self-center print:hidden">
          <img
            loading="lazy"
            src="/self.webp"
            alt="Dugi's photo"
            className="block w-full h-full rounded-full"
          />
        </div>
        <VFlex gap="8" printGap="4">
          <HFlex justifyContent="space-between" gap="8" className="md:flex-col">
            <section>
              <h1 className="text-2xl font-bold whitespace-nowrap">{resume.name}</h1>
              <p className="uppercase text-xs font-normal">{resume.title}</p>
            </section>
            <VFlex as="section" gap="2">
              <HFlex gap="2" alignItems="center">
                <MapPinIcon className="w-5 h-5" />
                <p aria-label="Dugi's location" className="text-sm whitespace-nowrap">
                  {resume.location}
                </p>
              </HFlex>
              <HFlex gap="2" alignItems="center">
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
              </HFlex>
            </VFlex>
          </HFlex>
          <VFlex as="section" gap="4">
            <h2>Skills</h2>
            <SkillsList label="Languages" items={resume.skills.languages} />
            <SkillsList label="Frameworks and libraries" items={resume.skills.frameworks} />
            <SkillsList label="Miscellaneous" items={resume.skills.misc} />
          </VFlex>
        </VFlex>
      </VFlex>
    </aside>
  );
};
