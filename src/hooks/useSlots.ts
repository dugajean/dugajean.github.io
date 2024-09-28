import { Children, FC, PropsWithChildren, ReactElement, isValidElement } from "react";

type UseSlotsArgs<TComponentName extends string> = {
  children: ReactElement | ReactElement[];
  slotMap: Record<TComponentName, FC<PropsWithChildren<unknown>>>;
  required?: string[];
};

type ComponentsMap<TComponentName extends string> = Record<
  TComponentName,
  ReactElement | ReactElement[]
>;

export function useSlots<TComponentName extends string>({
  children,
  slotMap,
  required
}: UseSlotsArgs<TComponentName>) {
  const slotMapEntries = Object.entries(slotMap);
  const result: ComponentsMap<TComponentName> = {} as ComponentsMap<TComponentName>;
  const childComponentMap: Record<TComponentName, ReactElement | ReactElement[]> =
    {} as ComponentsMap<TComponentName>;
  let unslottableChildren: ReactElement | null = null;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    let slotName: TComponentName;
    if (typeof child.type === "symbol") {
      slotName = "unslottableChildren" as TComponentName;
    } else {
      const matchedChildIdx = slotMapEntries.findIndex(([, c]) => c === child.type);
      slotName = slotMapEntries[matchedChildIdx][0] as TComponentName;
    }

    if (slotName in childComponentMap) {
      const contents = childComponentMap[slotName];
      if (contents && !Array.isArray(contents)) {
        childComponentMap[slotName] = [contents];
      }
      const arrayChild = childComponentMap[slotName] as ReactElement[];
      arrayChild.push(child);
    } else {
      childComponentMap[slotName] = child;
    }
  });

  for (const slotName in slotMap) {
    const typedSlotName = slotName as TComponentName;
    const child = childComponentMap[typedSlotName];

    if (required && required.includes(typedSlotName) && !child) {
      throw new Error(`Slot '${slotName}' is required and must be used within this component`);
    }

    if (Array.isArray(child)) {
      for (const c of child) {
        if (!isValidElement(c)) continue;
      }
    } else if (!isValidElement(child)) {
      continue;
    }

    result[typedSlotName] = child;
  }

  if ("unslottableChildren" in childComponentMap) {
    unslottableChildren = childComponentMap["unslottableChildren"] as ReactElement;
  }

  return { slots: result, unslottableChildren };
}
