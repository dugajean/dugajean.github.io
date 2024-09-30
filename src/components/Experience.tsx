import { PropsWithChildren, ReactElement } from "react";
import { useSlots } from "../hooks/useSlots";
import { ClassNameProp, PropsWithRequiredChildren } from "../types/common";

const Experience = ({ children, className }: PropsWithRequiredChildren<ClassNameProp>) => {
  const { slots } = useSlots({
    children: children as ReactElement[],
    slotMap: {
      title: Title,
      duration: Duration,
      description: Description,
      bullet: Bullet
    },
    required: ["title"]
  });

  return (
    <article className={`flex flex-col gap-2 ${className}`}>
      <div className="flex flex-col gap-2 print:flex-row print:justify-between">
        <h3>{slots.title}</h3>
        <div className="text-sm print:text-xs text-gray-500 print:text-indigo-700 uppercase">
          {slots.duration}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="print:text-xs">{slots.description}</p>
        <ul className="list-disc ml-4 print:text-xs">{slots.bullet}</ul>
      </div>
    </article>
  );
};

const Title = ({ children }: PropsWithChildren) => <>{children}</>;
const Description = ({ children, className }: PropsWithChildren<ClassNameProp>) => (
  <span className={className}>{children}</span>
);
const Duration = ({ children }: PropsWithChildren) => <>{children}</>;
const Bullet = ({ children }: PropsWithChildren) => <li>{children}</li>;

Experience.Title = Title;
Experience.Description = Description;
Experience.Duration = Duration;
Experience.Bullet = Bullet;

export { Experience };
