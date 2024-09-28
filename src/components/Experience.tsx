import { PropsWithChildren } from "react";
import { useSlots } from "../hooks/useSlots";
import { PropsWithSlots } from "../types/common";

const Experience = ({ children }: PropsWithSlots) => {
  const { slots } = useSlots({
    children,
    slotMap: {
      title: Title,
      duration: Duration,
      description: Description,
      bullet: Bullet
    },
    required: ["title", "duration"]
  });

  return (
    <article className="flex flex-col gap-2">
      <h3 className="text-lg font-bold">{slots.title}</h3>
      <p className="text-sm text-gray-400 uppercase">{slots.duration}</p>
      <div className="flex flex-col gap-1">
        <p>{slots.description}</p>
        <ul className="list-disc ml-4">{slots.bullet}</ul>
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
