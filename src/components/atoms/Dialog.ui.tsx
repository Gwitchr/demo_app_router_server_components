import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";

interface DialogProps {
  Title: ReactNode;
  open: boolean;
  handleClose: () => void;
}

export function Dialog({
  children,
  Title,
  open,
  handleClose
}: Readonly<PropsWithChildren<DialogProps>>) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalNode = modalRef.current;
    if (modalNode) {
      if (open && !modalNode.open) {
        modalNode.showModal();
      } else {
        modalNode.close();
      }
    }
  }, [open]);

  return (
    <dialog
      className="min-h-[80vh] min-w-80 w-[60vw] rounded-lg p-0 m-auto"
      id="modalDialog"
      role="dialog"
      aria-label="modal"
      aria-modal
      ref={modalRef}
    >
      <header className="flex justify-between p-4">
        {Title} <button onClick={handleClose}> ✖️ </button>
      </header>
      <section>{children}</section>
    </dialog>
  );
}
