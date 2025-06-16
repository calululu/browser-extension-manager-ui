import { useContext } from "react";
import { ExtensionsFilterContext } from "./extensionsFilterContext";

export function useExtensionsFilter() {
  const context = useContext(ExtensionsFilterContext);
  if (!context) {
    throw new Error(
      "useExtensionsFilter must be within ExtensionsFilterProvider",
    );
  }
  return context;
}
