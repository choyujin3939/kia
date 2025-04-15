import { useState } from "react";

const useModal = (open = false) => {
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [isModify, setIsModify] = useState(false);
  const [targetId, setTargetId] = useState<string>("");

  const openModal = () => {
    setTargetId("");
    setIsModify(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModifyModal = (targetId: string) => {
    setIsModify(true);
    setIsModalOpen(true);
    setTargetId(targetId);
  };

  return {
    openModal,
    closeModal,
    openModifyModal,
    isModalOpen,
    isModify,
    targetId,
  };
};

export default useModal;
