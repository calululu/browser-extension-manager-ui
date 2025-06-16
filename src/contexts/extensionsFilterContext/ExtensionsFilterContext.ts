import { createContext } from "react";
import { type FilterOption } from "../../types/type";
import { type CardType } from "../../types/type";

type ExtensionsFilterType = {
  activeFilter: FilterOption;
  setActiveFilter: (filter: FilterOption) => void;
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  filteredCards: CardType[];
  toggleCardActive: (cardName: string) => void;
};

export const ExtensionsFilterContext = createContext<
  ExtensionsFilterType | undefined
>(undefined);
