"use client";

import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const OrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <a
      href="https://wa.me/+919929325262"
      className={`fixed md:bottom-[70px] hiddenn right-4 bg-primary text-white p-3 z-[50] rounded-full shadow-lg hover:bg-primary-dark transition duration-300 md:flex items-center gap-2 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaShoppingCart className="text-xl" />
      <span className="absolute -left-4 text-primary animate-pulse -top-6 text-nowrap text-sm font-semibold">
        Order Now
      </span>
    </a>
  );
};

export default OrderButton;
