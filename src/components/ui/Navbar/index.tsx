"use client";
import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js for optimized images
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../Sidebar";
import { useRouter } from "next/navigation";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion"; // Importing Framer Motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onCloseModal = () => setIsOpen(false);

  return (
    <>
      <nav className="w-full top-0 z-50 bg-white text-white py-4 px-4">
        <div className="container mx-auto flex justify-between gap-2 items-center">
          {/* Logo Section with Animation */}
          <motion.div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer"
            initial={{ scale: 1 }} // Start with normal scale
            whileHover={{ scale: 1.1 }} // Scale up on hover
            transition={{ duration: 0.3 }} // Duration of animation
          >
            <Image
              src="/images/logo.png" // Path to your logo in the public folder
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
            initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and slightly above
            animate={{ opacity: 1, y: 0 }} // Fade in and move to final position
            transition={{ duration: 0.5 }} // Duration of animation
          >
            {["/", "/menu", "/about"].map((path, index) => (
              <motion.li
                key={index}
                className="hover:text-accent relative"
                whileHover={{ scale: 1.1 }} // Scale up on hover
                transition={{ duration: 0.2 }} // Duration of hover effect
              >
                <Link href={path}>
                  {path === "/"
                    ? "Home"
                    : path === "/menu"
                    ? "Our Menu"
                    : "About Us"}
                </Link>
                <motion.div
                  className="absolute left-0 right-0 bottom-0 h-1 bg-accent scale-x-0"
                  whileHover={{ scaleX: 1 }} // Scale x to show underline effect
                  transition={{ duration: 0.2 }} // Duration of the underline effect
                />
              </motion.li>
            ))}
          </motion.ul>

          {/* Social Icons Section with Animation */}
          <motion.ul
            className="md:flex items-center hidden gap-4"
            initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and slightly above
            animate={{ opacity: 1, y: 0 }} // Fade in and move to final position
            transition={{ duration: 0.5 }} // Duration of animation
          >
            {[
              {
                icon: <SiZomato />,
                href: "https://zomato.onelink.me/xqzv/6f9flr7g",
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
                whileHover={{ scale: 1.2 }} // Scale up on hover
                transition={{ duration: 0.2 }} // Duration of hover effect
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

      <Sidebar
        isOpen={isOpen}
        onClose={onCloseModal}
      />
    </>
  );
};

export default Navbar;
