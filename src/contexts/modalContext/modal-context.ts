import { createContext } from "react";

type ModalContextType = {
  isDeleteModalOpen: boolean;
  cardToDelete: string | null;
  openDeleteModal: (cardName: string, onConfirm: () => void) => void;
  closeDeleteModal: () => void;
  confirmDelete: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);
