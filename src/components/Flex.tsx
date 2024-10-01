import { PropsWithChildren, useMemo } from "react";
import { ClassNameProp } from "../types/common";

const gapClassMap = {
  "0": "gap-0",
  "0.5": "gap-0.5",
  "1": "gap-1",
  "1.5": "gap-1.5",
  "2": "gap-2",
  "2.5": "gap-2.5",
  "3": "gap-3",
  "3.5": "gap-3.5",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "7": "gap-7",
  "8": "gap-8",
  "9": "gap-9",
  "10": "gap-10",
  "11": "gap-11",
  "12": "gap-12",
  "14": "gap-14",
  "16": "gap-16",
  "20": "gap-20",
  "24": "gap-24",
  "28": "gap-28",
  "32": "gap-32",
  "36": "gap-36",
  "40": "gap-40",
  "44": "gap-44",
  "48": "gap-48",
  "52": "gap-52",
  "56": "gap-56",
  "60": "gap-60",
  "64": "gap-64",
  "72": "gap-72",
  "80": "gap-80",
  "96": "gap-96"
};

const flexboxClassMap = {
  direction: {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse"
  },
  justifyContent: {
    "flex-start": "justify-start",
    "flex-end": "justify-end",
    center: "justify-center",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly"
  },
  alignItems: {
    stretch: "items-stretch",
    "flex-start": "items-start",
    "flex-end": "items-end",
    center: "items-center",
    baseline: "items-baseline"
  },
  alignContent: {
    stretch: "content-stretch",
    "flex-start": "content-start",
    "flex-end": "content-end",
    center: "content-center",
    "space-between": "content-between",
    "space-around": "content-around"
  },
  wrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse"
  }
} as const;

type GapValues = keyof typeof gapClassMap;

type FlexboxAttrsMap<TAttr extends keyof typeof flexboxClassMap> =
  keyof (typeof flexboxClassMap)[TAttr];

type FlexProps = ClassNameProp & {
  as?: "div" | "section" | "main" | "header" | "footer" | "article" | "aside" | "p" | "dl";
  direction?: FlexboxAttrsMap<"direction">;
  gap?: GapValues;
  printGap?: GapValues;
  justifyContent?: FlexboxAttrsMap<"justifyContent">;
  alignItems?: FlexboxAttrsMap<"alignItems">;
  alignContent?: FlexboxAttrsMap<"alignContent">;
  wrap?: FlexboxAttrsMap<"wrap">;
};

export const Flex = ({
  children,
  gap,
  wrap,
  printGap,
  direction,
  alignItems,
  alignContent,
  justifyContent,
  as = "div",
  className = ""
}: PropsWithChildren<FlexProps>) => {
  const Container = as;

  const joinedClasses = useMemo(() => {
    const flexClasses = ["flex", className];

    if (direction) flexClasses.push(flexboxClassMap.direction[direction]);
    if (alignContent) flexClasses.push(flexboxClassMap.alignContent[alignContent]);
    if (alignItems) flexClasses.push(flexboxClassMap.alignItems[alignItems]);
    if (wrap) flexClasses.push(flexboxClassMap.wrap[wrap]);
    if (justifyContent) flexClasses.push(flexboxClassMap.justifyContent[justifyContent]);
    if (gap) flexClasses.push(gapClassMap[gap]);
    if (printGap) flexClasses.push(`print:${gapClassMap[printGap]}`);

    return flexClasses
      .filter(Boolean)
      .map((s) => s.trim())
      .join(" ");
  }, [alignContent, alignItems, className, direction, gap, justifyContent, printGap, wrap]);

  return <Container className={joinedClasses}>{children}</Container>;
};

export const VFlex = ({ ...props }: PropsWithChildren<Omit<FlexProps, "direction">>) => (
  <Flex {...props} direction="column" />
);

export const HFlex = ({ ...props }: PropsWithChildren<Omit<FlexProps, "direction">>) => (
  <Flex {...props} direction="row" />
);
