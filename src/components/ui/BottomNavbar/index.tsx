"use client";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { CgCoffee } from "react-icons/cg";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { motion } from "framer-motion"; // Import Framer Motion

const data = [
  {
    icon: <CgCoffee />,
    text: "Our Menu",
    link: "/menu",
  },
  {
    icon: <BsInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/oh.shakes/",
  },
  {
    icon: <SiSwiggy />,
    text: "Swiggy",
    link: "https://www.swiggy.com/menu/632170?source=sharing",
  },
  {
    icon: <SiZomato />,
    text: "Zomato",
    link: "https://zomato.onelink.me/xqzv/6f9flr7g",
  },
];

const BottomNavbar = () => {
  return (
    <div className="px-4 md:hidden z-[100] fixed bottom-0 left-0 right-0 py-4 h-[80px] bg-dark-brown">
      <div className="flex justify-between gap-4">
        {data.map((item, index) => (
          <Link key={index} href={item.link}>
            <motion.div
              className="flex flex-col items-center justify-center text-light"
              initial={{ opacity: 0, y: 20 }} // Start off-screen and hidden
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Stagger animations
              }}
              viewport={{ once: true }} // Animation plays once when in view
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
