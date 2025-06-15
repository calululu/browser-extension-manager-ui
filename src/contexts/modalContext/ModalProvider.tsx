import { useState } from "react";
import { ModalContext } from "./modal-context";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<string | null>(null);
  const [onConfirmCallback, setOnConfirmCallback] = useState<
    (() => void) | null
  >(null);

  const openDeleteModal = (cardName: string, onConfirm: () => void) => {
    setCardToDelete(cardName);
    setOnConfirmCallback(() => onConfirm);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCardToDelete(null);
    setOnConfirmCallback(null);
  };

  const confirmDelete = () => {
    if (onConfirmCallback) {
      onConfirmCallback();
    }
    closeDeleteModal();
  };

  return (
    <ModalContext.Provider
      value={{
        isDeleteModalOpen,
        cardToDelete,
        openDeleteModal,
        closeDeleteModal,
        confirmDelete,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
