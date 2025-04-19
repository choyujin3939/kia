"use client";

import React, { useEffect, useRef } from "react";
import dialogStyles from "@/component/common/dialog.styles";

type TProps = {
  open: boolean;
  type?: string;
  title?: string | React.ReactNode;
  handleClose: () => void;
  children: React.ReactNode;
};

const dialog = ({ open, type, title, handleClose, children }: TProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (isOutside) {
      handleClose();
    }
  };

  return (
    <dialog ref={dialogRef} css={dialogStyles} onClick={handleOverlayClick}>
      <div>
        <div className={`dialog-wrapper ${type ? `dialog-${type}` : ""}`}>
          <div className="dialog-header">
            <h4>{title}</h4>
            <button type="button" className="close" onClick={handleClose}>
              닫기
            </button>
          </div>
          <div className="dialog-body">{children}</div>
        </div>
      </div>
    </dialog>
  );
};

export default dialog;
