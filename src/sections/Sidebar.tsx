import { AtSymbolIcon, MapPinIcon } from "@heroicons/react/24/outline";
import LinkedinIcon from "../assets/svg/linkedin.svg?react";
import { useResume } from "../hooks/useResume";
import { SkillsList } from "../components/SkillsList";
import { HFlex, VFlex } from "../components/Flex";
import { InfoSlot } from "../components/InfoSlot";

export const Sidebar = () => {
  const resume = useResume();

  return (
    <aside className="bg-indigo-800 text-white print:bg-white print:text-slate-900 bg-opacity-70 w-full md:w-1/4 print:w-full px-12 py-12 print:py-0 print:px-0 md:py-24 lg:rounded-tl-lg lg:rounded-bl-lg print:rounded-none">
      <VFlex gap="4" className="md:sticky print:static md:top-16 md:items-center">
        <div className="w-40 md:w-24 lg:w-32 h-40 md:h-24 lg:h-32 self-center print:hidden">
          <img
            loading="lazy"
            src="/self.webp"
            alt="Dugi's photo"
            className="block w-full h-full rounded-full"
          />
        </div>
        <VFlex gap="8" printGap="0">
          <HFlex gap="8" printGap="2" className="md:flex-col print:flex-col">
            <section className="print:text-center">
              <h1 className="text-2xl font-bold whitespace-nowrap">{resume.name}</h1>
              <p className="uppercase text-xs font-normal">{resume.title}</p>
            </section>
            <VFlex
              as="section"
              gap="3"
              printGap="2"
              className="print:flex-row print:justify-center print:items-center"
            >
              <InfoSlot Icon={MapPinIcon} label={resume.location} ariaLabel="Location" />
              <p className="hidden print:block text-xs">/</p>
              <InfoSlot
                Icon={AtSymbolIcon}
                label={resume.contact.email}
                ariaLabel="Email"
                href={`mailto:${resume.contact.email}`}
              />
              <p className="hidden print:block text-xs">/</p>
              <InfoSlot
                Icon={LinkedinIcon}
                href={resume.contact.linkedin}
                label={
                  <>
                    <span className="print:hidden">LinkedIn</span>
                    <span className="print:block">in/dsur</span>
                  </>
                }
              />
            </VFlex>
          </HFlex>
          <VFlex as="section" gap="4" className="print:hidden">
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
