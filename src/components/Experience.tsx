import { PropsWithChildren, ReactElement } from "react";
import { useSlots } from "../hooks/useSlots";
import { ClassNameProp, PropsWithRequiredChildren } from "../types/common";
import { VFlex } from "./Flex";

const Experience = ({ children, className = "" }: PropsWithRequiredChildren<ClassNameProp>) => {
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
    <VFlex as="article" gap="2" className={["experience", className].join(" ")}>
      <VFlex gap="2" printGap="1">
        <h3>{slots.title}</h3>
        {!!slots.duration && (
          <div className="text-sm print:text-xs text-gray-500 uppercase">{slots.duration}</div>
        )}
      </VFlex>
      {!!slots.description && !!slots.bullet && (
        <VFlex gap="1">
          <p className="print:text-xs">{slots.description}</p>
          <ul className="list-disc ml-4 print:text-xs">{slots.bullet}</ul>
        </VFlex>
      )}
    </VFlex>
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
