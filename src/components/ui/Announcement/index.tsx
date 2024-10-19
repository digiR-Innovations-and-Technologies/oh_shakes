"use client";
import { useState } from "react";
import { BsStars } from "react-icons/bs";

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-dark-brown text-white text-center py-3 px-5 font-bold relative">
      <p>
        <BsStars className="inline-block text-accent-secondary" /> Savor our
        thick shakes, coffee, lassi, sandwiches, and more—made to delight!{" "}
        <BsStars className="inline-block text-accent-secondary" />
      </p>
      {/* <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg"
        onClick={handleClose}
      >
        ✕
      </button> */}
    </div>
  );
};

export default Announcement;
