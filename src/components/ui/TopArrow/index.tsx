"use client";

import { useEffect, useState } from "react";

const TopArrow = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed md:bottom-4 bottom-28 right-4 bg-primary text-white p-2 z-[50] rounded-full shadow-lg hover:bg-primary-dark transition duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg
        xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default TopArrow;
