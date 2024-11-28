"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <h2>
    <Modal title="test" description="idlidl" isOpen onChange={() => {}}>
      testing children
    </Modal>
  </h2>;
};

export default ModalProvider;
