"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../Sidebar";
import { useRouter } from "next/navigation";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State to manage visibility
  const router = useRouter();

  const onCloseModal = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        // Scrolling down
        setIsSticky(true);
      } else {
        // Scrolling up
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full z-50 bg-white border-b py-4 px-4 transition-transform duration-300 ${
          isSticky ? "sticky top-0" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between gap-2 items-center">
          {/* Logo Section with Animation */}
          <motion.div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/logo.png"
              alt="Cafe Logo"
              width={50}
              height={50}
            />
            <h1 className="ml-3 text-3xl text-dark-brown font-bold">
              <span className="text-primary">Oh</span> Shakes
            </h1>
          </motion.div>

          {/* Links Section with Animation */}
          <motion.ul
            className="md:flex text-dark-brown font-bold px-4 py-1 rounded-full hidden space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/menu", label: "Our Menu" },
              { path: "/contact", label: "Contact" },
              { path: "/franchise", label: "Own Franchise" },
              { path: "/blogs", label: "Blogs" },
            ].map((link, index) => (
              <motion.li
                key={index}
                className="hover:text-accent relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={link.path}>{link.label}</Link>
                <motion.div
                  className="absolute left-0 right-0 bottom-0 h-1 bg-accent scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.li>
            ))}
          </motion.ul>

          {/* Social Icons Section with Animation */}
          <motion.ul
            className="md:flex items-center hidden gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                icon: <SiZomato />,
                href: "https://link.zomato.com/xqzv/rshare?id=94994719305639af",
              },
              {
                icon: <SiSwiggy />,
                href: "https://www.swiggy.com/menu/632170?source=sharing",
              },
              {
                icon: <BsInstagram />,
                href: "https://www.instagram.com/oh.shakes",
              },
            ].map((social, index) => (
              <motion.li
                key={index}
                className="text-dark-brown hover:text-accent transition hover:border-accent text-2xl border-2 border-dark-brown p-1 rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <button
            onClick={() => setIsOpen(true)}
            className="text-dark-brown md:hidden text-3xl"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <Sidebar isOpen={isOpen} onClose={onCloseModal} />
    </>
  );
};

export default Navbar;
