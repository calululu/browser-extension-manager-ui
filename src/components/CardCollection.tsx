import { type CardType } from "../types/type";
import Card from "./Card";
import { useModal } from "../contexts/modalContext/useModal";
import { useExtensionsFilter } from "../contexts/extensionsFilterContext/useExtensionsFilter";
import { motion, AnimatePresence } from "framer-motion";

// Add this variant configuration
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This will stagger the children's animation
      delayChildren: 0.1, // Optional: initial delay before animation starts
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CardCollection() {
  const { setCards, filteredCards, toggleCardActive } = useExtensionsFilter();
  const { openDeleteModal } = useModal();

  const handleRemoveCard = (cardName: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.name !== cardName));
  };

  return (
    <motion.div
      className="grid grid-cols-1 items-center justify-center gap-4 xl:grid-cols-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredCards.map((card: CardType, index: number) => {
          return (
            <motion.div key={index} variants={item}>
              <Card
                name={card.name}
                description={card.description}
                logo={card.logo}
                isActive={card.isActive}
                onRemove={() =>
                  openDeleteModal(card.name, () => handleRemoveCard(card.name))
                }
                onToggleActive={() => toggleCardActive(card.name)}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
