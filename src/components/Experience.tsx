import { PropsWithChildren, ReactElement } from "react";
import { useSlots } from "../hooks/useSlots";
import { PropsWithRequiredChildren } from "../types/common";

type ExperienceProps = {
  className?: string;
};

const Experience = ({ children, className }: PropsWithRequiredChildren<ExperienceProps>) => {
  const { slots } = useSlots({
    children: children as ReactElement[],
    slotMap: {
      title: Title,
      duration: Duration,
      description: Description,
      bullet: Bullet
    },
    required: ["title", "duration"]
  });

  return (
    <article className={`flex flex-col gap-2 ${className}`}>
      <h3 className="text-lg font-bold">{slots.title}</h3>
      <div className="text-sm print:text-xs text-gray-400 uppercase">{slots.duration}</div>
      <div className="flex flex-col gap-1">
        <p className="print:text-sm">{slots.description}</p>
        <ul className="list-disc ml-4 print:text-sm">{slots.bullet}</ul>
      </div>
    </article>
  );
};

const Title = ({ children }: PropsWithChildren) => <>{children}</>;
const Description = ({ children }: PropsWithChildren) => <>{children}</>;
const Duration = ({ children }: PropsWithChildren) => <>{children}</>;
const Bullet = ({ children }: PropsWithChildren) => <li>{children}</li>;

Experience.Title = Title;
Experience.Description = Description;
Experience.Duration = Duration;
Experience.Bullet = Bullet;

export { Experience };
