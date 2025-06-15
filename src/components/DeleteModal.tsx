import { useEffect, useRef } from "react";
// import { useState } from "react";
import Button from "./Button";
import { useModal } from "../contexts/modalContext/useModal";

function DeleteModal() {
  // IMportante. Il CSS ::backdrop funziona sul modal SOLO se viene aperto con .showModal() e non con l'attributo open
  //<HTMLDialogElement> è un type di ts che indica il tipo di elemento html generico a cui ref punta. Equivalente a { current: HTMLDialogElement | null }
  const { isDeleteModalOpen, cardToDelete, closeDeleteModal, confirmDelete } =
    useModal();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isDeleteModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isDeleteModalOpen]);

  return (
    <dialog
      className="fixed left-1/2 top-1/2 z-50 max-w-[39rem] -translate-x-1/2 -translate-y-1/2 transform rounded-xl border-0 p-8 backdrop:bg-gray-700 backdrop:opacity-90 backdrop:backdrop-blur-sm dark:bg-neutral-700"
      ref={dialogRef}
      aria-labelledby="dialog-delete-check"
    >
      <h2 className="dark:text-neutral-0 mb-4 text-3xl">Delete extension</h2>
      <p className="dark:text-neutral-0">
        Are you sure you want to delete the extension {cardToDelete} ?
      </p>
      <div className="mt-8 flex justify-between gap-4">
        <Button modal="no" handleClick={closeDeleteModal}>
          NO, CANCEL
        </Button>
        <Button modal="yes" handleClick={confirmDelete}>
          YES, DELETE
        </Button>
      </div>
    </dialog>
  );
}

export default DeleteModal;
