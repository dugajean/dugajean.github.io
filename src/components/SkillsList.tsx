type SkillsListProps = {
  label: string;
  items: string[];
};

export const SkillsList = ({ label, items }: SkillsListProps) => (
  <dl className="flex gap-2 flex-wrap skills-list font-extralight print:font-light print:text-sm">
    <dt className="uppercase md:text-xs font-semibold w-full">{label}</dt>
    {items.map((item) => (
      <dd key={item}>{item}</dd>
    ))}
  </dl>
);
