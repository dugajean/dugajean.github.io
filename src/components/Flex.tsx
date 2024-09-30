import { PropsWithChildren } from "react";
import { ClassNameProp } from "../types/common";

type TailwindGapValues =
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

type FlexProps = ClassNameProp & {
  as?: "div" | "section" | "main" | "header" | "footer" | "article" | "aside" | "p" | "dl";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: TailwindGapValues;
  printGap?: TailwindGapValues;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  alignContent?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};

const flexboxClassMap = {
  flexDirection: {
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

const generateGapClass = (gap: TailwindGapValues) => `gap-${gap}` as const;

export const Flex = ({
  as = "div",
  children,
  className,
  alignContent,
  alignItems,
  direction,
  wrap,
  gap,
  printGap,
  justifyContent
}: PropsWithChildren<FlexProps>) => {
  const Container = as;
  const flexClasses = [];

  if (direction) flexClasses.push(flexboxClassMap.flexDirection[direction]);
  if (alignContent) flexClasses.push(flexboxClassMap.alignContent[alignContent]);
  if (alignItems) flexClasses.push(flexboxClassMap.alignItems[alignItems]);
  if (wrap) flexClasses.push(flexboxClassMap.wrap[wrap]);
  if (justifyContent) flexClasses.push(flexboxClassMap.justifyContent[justifyContent]);
  if (gap) flexClasses.push(generateGapClass(gap));
  if (printGap) flexClasses.push(`print:${generateGapClass(printGap)}`);

  return <Container className={`flex ${flexClasses.join(" ")} ${className}`}>{children}</Container>;
};

export const VFlex = ({ ...props }: PropsWithChildren<Omit<FlexProps, "direction">>) => (
  <Flex {...props} direction="column" />
);

export const HFlex = ({ ...props }: PropsWithChildren<Omit<FlexProps, "direction">>) => (
  <Flex {...props} direction="row" />
);
