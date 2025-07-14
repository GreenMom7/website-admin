"use client";

import { useStoreModal } from "@/app/hooks/use-store-modal";
import Modal from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Make your store"
      description="Your store description"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Store Form
    </Modal>
  );
};
