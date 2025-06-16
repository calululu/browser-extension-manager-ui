import { createContext } from "react";

type ExtensionsFilterType = unknown;

export const ExtensionsFilterContext =
  createContext<ExtensionsFilterType>(undefined);
