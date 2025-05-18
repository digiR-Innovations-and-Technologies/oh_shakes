"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../Sidebar";
import { useRouter } from "next/navigation";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

type SocialLinks = {
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  swiggy: string;
  zomato: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State to manage visibility
  const router = useRouter();
  const [links, setLinks] = useState<SocialLinks | null>(null);
  
    useEffect(() => {
      fetch("/social-links.json")
        .then((res) => res.json())
        .then((data: SocialLinks) => setLinks(data))
        .catch((err) => console.error("Error loading social links:", err));
    }, []);

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
            <h1 className="ml-3 text-3xl text-primary font-extrabold stroke-2">
              Oh Shakes
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
              { path: "/about", label: "About Us" },
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
                href: `${links?.zomato}`,
              },
              {
                icon: <SiSwiggy />,
                href: `${links?.swiggy}`,
              },
              {
                icon: <BsInstagram />,
                href: `${links?.instagram}`,
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
