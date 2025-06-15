import { type CardType } from "../types/type";
import data from "../data/data.json";
import Card from "./Card";
import { useState } from "react";
import { useModal } from "../contexts/modalContext/useModal";

// CardCollection.tsx
export default function CardCollection() {
  const [cards, setCards] = useState<CardType[]>(data);
  const { openDeleteModal } = useModal();

  const handleRemoveCard = (cardName: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.name !== cardName));
  };

  return (
    <div className="grid grid-cols-1 items-center justify-center gap-4 xl:grid-cols-3">
      {cards.map((card: CardType, index: number) => {
        return (
          <Card
            key={index}
            name={card.name}
            description={card.description}
            logo={card.logo}
            isActive={card.isActive}
            onRemove={() =>
              openDeleteModal(card.name, () => handleRemoveCard(card.name))
            }
          />
        );
      })}
    </div>
  );
}
