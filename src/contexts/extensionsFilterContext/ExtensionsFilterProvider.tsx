import { useState } from "react";
import { ExtensionsFilterContext } from "./ExtensionsFilterContext";
import { type FilterOption } from "../../types/type";
import { type CardType } from "../../types/type";
import data from "../../data/data.json";

export default function ExtensionsFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All"); //All, Active, Inactive
  const [cards, setCards] = useState<CardType[]>(data);

  const toggleCardActive = (cardName: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.name === cardName ? { ...card, isActive: !card.isActive } : card,
      ),
    );
  };

  // Correct filter logic
  const filteredCards = cards.filter((card) => {
    switch (activeFilter) {
      case "Active":
        return card.isActive;
      case "Inactive":
        return !card.isActive;
      default:
        return true;
    }
  });

  //   const [cards, setCards] = useState<CardType[]>(filteredCards);

  return (
    <ExtensionsFilterContext.Provider
      value={{
        activeFilter,
        setActiveFilter,
        cards,
        setCards,
        filteredCards,
        toggleCardActive,
      }}
    >
      {children}
    </ExtensionsFilterContext.Provider>
  );
}
