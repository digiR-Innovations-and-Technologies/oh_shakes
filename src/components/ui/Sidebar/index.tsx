"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FiMenu, FiHome, FiCoffee, FiInfo, FiCrosshair } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-dark-brown text-white shadow-lg z-40"
    >
      <div className="flex flex-col h-full">
        <div className="px-6 flex items-center justify-between py-4 border-b border-light">
          <Image
            src="/images/logo.png" // Path to your logo in the public folder
            alt="Cafe Logo"
            width={50}
            height={50}
          />
          <button
            onClick={onClose}
            className="fixed top-5 right-5 text-3xl text-accent z-50"
          >
            <RxCross2 />
          </button>
        </div>
        <ul className="flex-grow px-6 py-4 space-y-4">
          <li className="flex items-center space-x-2 text-lg text-light hover:text-yellow-300">
            <FiHome />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 text-lg text-light hover:text-yellow-300">
            <FiCoffee />
            <span>Menu</span>
          </li>
          <li className="flex items-center space-x-2 text-lg text-light hover:text-yellow-300">
            <FiInfo />
            <span>About Us</span>
          </li>
        </ul>
        <div className="px-6 py-4 border-t border-light">
          <p className="text-sm">© 2024 Oh Shakes</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
