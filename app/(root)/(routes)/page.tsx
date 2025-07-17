"use client";
import { UserButton } from "@clerk/nextjs";
import { useStoreModal } from "../../../hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div className="m-8">Hi</div>;
};

export default SetupPage;
