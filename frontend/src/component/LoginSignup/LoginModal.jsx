import React, { useRef } from "react";
import LoginSignup from "./LoginSignup";

const LoginModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed lg:h-screen h-auto md:pt-10 inset-0 z-50 bg-white/90 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div ref={modalRef} className=" w-full mx-5 max-w-4xl">
        <LoginSignup onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginModal;
