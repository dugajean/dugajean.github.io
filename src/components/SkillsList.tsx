type SkillsListProps = {
  label: string;
  items: string[];
};

export const SkillsList = ({ label, items }: SkillsListProps) => (
  <dl className="flex gap-2 flex-wrap skills-list font-extralight print:font-normal print:text-sm">
    <dt className="uppercase print:underline md:text-xs font-semibold">
      {label}
      <span className="md:hidden">:</span>
    </dt>
    {items.map((framework) => (
      <dd key={framework}>{framework}</dd>
    ))}
  </dl>
);
