import { useState } from "react";
import { ModalContext } from "./modal-context";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isDeleteModalOpen,
        openDeleteModal,
        closeDeleteModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
