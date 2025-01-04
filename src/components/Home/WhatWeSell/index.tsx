"use client"; // Indicate this is a client component
import Image from "next/image";
import { motion } from "framer-motion";

// Cafe Item
const Items = [
  {
    image: "/images/coffee.png",
    name: "Coffee",
    description:
      "A smooth blend of espresso and steamed milk, topped with creamy foam.",
  },
  {
    image: "/images/patties.jpg",
    name: "Patties",
    description: "Crispy and golden, perfect for a satisfying bite.",
  },
  {
    image: "/images/nutella.jpg",
    name: "Nutella",
    description: "Rich and creamy, perfect for a sweet treat.",
  },
  {
    image: "/images/mocktail.jpg",
    name: "Mocktail",
    description: "Refreshing mix of flavors, perfect for a delightful drink",
  },
  {
    image: "/images/sandwich.jpg",
    name: "Sandwich",
    description:
      "Freshly made with quality ingredients, perfect for a quick bite.",
  },
  {
    image: "/images/maggie.png",
    name: "Maggie",
    description:
      "Delicious noodles, seasoned to perfection for a comforting taste.",
  },
  {
    image: "/images/waffle.jpg",
    name: "Waffle",
    description:
      "Fluffy waffles drizzled with syrup, served with fresh fruits.",
  },
  {
    image: "/images/shakes.jpg",
    name: "Italian Thick Shakes",
    description:
      "Creamy shakes blended with rich ice cream for a refreshing treat.",
  },
  {
    image: "/images/chocolate-shake.png",
    name: "Chocolate Shake",
    description:
      "Indulgent chocolate shake, finished with whipped cream and drizzle.",
  },
];

const WhatWeSell = () => {
  // Define animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8, // Scale down
      rotate: -10, // Rotate slightly
    },
    visible: {
      opacity: 1,
      scale: 1, // Scale to original size
      rotate: 0, // Rotate back to original position
      transition: {
        duration: 0.5, // Animation duration
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="px-4 py-12 flex items-center justify-center relative">
      <div className=" relative z-0">
        <div className="flex items-center gap-4 md:w-1/2 mx-auto">
          <div className="h-[2px] bg-dark-brown flex-1"></div>
          <h1 className="text-4xl text-dark-brown font-bold">What We Sell</h1>
          <div className="h-[2px] bg-dark-brown flex-1"></div>
        </div>
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-8 mt-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }} // Animate only once when in view
        >
          {Items.map((item, index) => (
            <motion.div
              key={index}
              className="flex md:odd:flex-col odd:flex-row-reverse md:flex-col items-center gap-4 py-6 px-4 md:text-center"
              variants={itemVariants} // Apply item variants for animation
            >
              <Image
                src={item.image.toString()}
                alt={item.name}
                width={200}
                loading="eager"
                rel="preload"
                height={200}
                className="w-40 h-40 object-cover aspect-square p-2 border-2 border-primary rounded-full"
              />
              <div>
                <h1 className="text-2xl leading-tight">{item.name}</h1>
                <p className="text-md leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeSell;
