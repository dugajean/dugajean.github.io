export type PropsWithRequiredChildren<TProps = object> = TProps & {
  children: React.ReactNode;
};

export type PropsWithSlots<TProps = object> = TProps & {
  children: React.ReactNode;
};
