import { createContext } from "react";

type ModalContextType = {
  isDeleteModalOpen: boolean;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);
