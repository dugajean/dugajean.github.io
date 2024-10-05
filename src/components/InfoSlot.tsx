import { ReactNode } from "react";
import { HFlex } from "./Flex";

type InfoSlotProps = {
  Icon: ReactNode;
  href?: string;
  label: ReactNode;
  ariaLabel?: string;
};

export const InfoSlot = ({ Icon, href, label, ariaLabel }: InfoSlotProps) => {
  const TextElement = href ? "a" : "p";

  return (
    <HFlex gap="2" alignItems="center" className={`${href ? "hover:text-amber-400" : ""}`}>
      <div className="w-5 h-5 flex items-center">{Icon}</div>
      <p className="text-sm print:text-xs">
        <TextElement
          href={href}
          aria-label={ariaLabel}
          className={`${href ? "underline print:text-pink-700" : ""} whitespace-nowrap`}
        >
          {label}
        </TextElement>
      </p>
    </HFlex>
  );
};
