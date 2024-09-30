import { HFlex } from "./Flex";

type SkillsListProps = {
  label: string;
  items: string[];
};

export const SkillsList = ({ label, items }: SkillsListProps) => (
  <HFlex
    as="dl"
    gap="2"
    wrap="wrap"
    className="skills-list font-extralight print:font-light print:text-sm"
  >
    <dt className="uppercase md:text-xs font-semibold w-full">{label}</dt>
    {items.map((item) => (
      <dd key={item}>{item}</dd>
    ))}
  </HFlex>
);
