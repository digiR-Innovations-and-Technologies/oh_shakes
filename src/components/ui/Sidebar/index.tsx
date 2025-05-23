"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiHome, FiPhone } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { TiInfoLargeOutline } from "react-icons/ti";
import { TbMilkshake } from "react-icons/tb";
import { MdStore } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleNavigate = (link: string) => {
    router.push(link);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-white text-black shadow-lg z-[999] overflow-hidden"
    >
      <div className="relative flex flex-col h-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

        {/* Header */}
        <div className="px-6 flex items-center justify-between py-4 border-b relative z-10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Cafe Logo"
              width={50}
              height={50}
            />
            <h1 className=" text-3xl text-dark-brown font-bold">
              <span className="text-primary">Oh</span> Shakes
            </h1>
          </div>
          <button
            onClick={onClose}
            className="fixed top-5 right-5 text-3xl text-accent z-50"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex-grow px-6 py-4 space-y-6 relative z-10">
          {[
            { label: "Home", icon: <FiHome />, link: "/" },
            { label: "Menu", icon: <TbMilkshake />, link: "/menu" },
            { label: "Contact Us", icon: <FiPhone />, link: "/contact" },
            {
              label: "Blogs",
              icon: <GoBook />,
              link: "/blogs",
            },
            {
              label: "Own Franchise",
              icon: <MdStore />,
              link: "/franchise",
            },
            {
              label: "About Us",
              icon: <TiInfoLargeOutline />,
              link: "/about",
            }
          ].map((item, index) => (
            <li
              onClick={() => handleNavigate(item.link)}
              key={index}
              className="flex items-center space-x-3 text-lg text-black hover:text-accent cursor-pointer transition-colors duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl"
              >
                {item.icon}
              </motion.div>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-light relative z-10">
          <p className="text-sm">© 2024 Oh Shakes</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
