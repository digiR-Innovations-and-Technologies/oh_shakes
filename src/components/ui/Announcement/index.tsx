"use client"
import { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100); // Change 100 to your desired scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-dark-brown text-white text-center h-20 flex items-center justify-center py-3 px-5 font-bold relative transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }} // Prevents interaction when hidden
    >
      <p>
        <BsStars className="inline-block text-accent-secondary" aria-label="star icon" />{" "}
        Savor our thick shakes, coffee, lassi, sandwiches, and more—made to delight!{" "}
        <BsStars className="inline-block text-accent-secondary" aria-label="star icon" />
      </p>
    </div>
  );
};

export default Announcement;
