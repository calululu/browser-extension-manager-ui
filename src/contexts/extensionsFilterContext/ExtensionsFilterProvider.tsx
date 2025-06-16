import { ExtensionsFilterContext } from "./extensionsFilterContext";

export default function ExtensionsFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ExtensionsFilterContext.Provider value={{}}>
      {children}
    </ExtensionsFilterContext.Provider>
  );
}
