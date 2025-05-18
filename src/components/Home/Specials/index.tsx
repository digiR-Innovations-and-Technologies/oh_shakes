"use client";
import React from "react";
import { FaSnowflake, FaMugHot } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import { useRouter } from "next/navigation";
import { HiOutlineSparkles } from "react-icons/hi2";

const summerItems = [
  {
    id: 1,
    name: "Cold Coffee",
    image: "/images/coldCoffee.jpg",
    description:
      "Smooth, chilled, and perfectly brewed — our cold coffee is the ultimate summer refresher",
  },
  {
    id: 2,
    image: "/images/strawberryBliss.jpg",
    name: "Strawberry Bliss",
    description: "Lush, creamy, and full of berry love — Strawberry Bliss is your go-to summer crush.",
  },
  {
    id: 3,
    name: "Blueberry Trip",
    image: "/images/blueberryTrip.jpg",
    description:
      "A bold blend of blueberries and cream — Blueberry Trip takes your taste buds on a smooth, fruity ride.",
  },
];

const winterItems = [
  {
    id: 1,
    name: "Tiramisu Latte",
    image: "/images/tiramisu-latte.jpg",
    description:
      "Indulge in the classic Italian dessert with a latte. Layers of espresso-soaked ladyfingers and mascarpone cream, topped with cocoa powder",
  },
  {
    id: 2,
    image: "/images/nutella.jpg",
    name: "Hot Nutella",
    description: "Rich and creamy, perfect for a sweet treat.",
  },
  {
    id: 3,
    name: "Affogato",
    image: "/images/affogato.jpg",
    description:
      "Espresso poured over a scoop of vanilla gelato. A delightful combination of coffee and ice cream.",
  },
];

const WinterSpecials = () => {
  const router = useRouter();

  return (
    <section className="py-12 bg-light-blue text-center relative overflow-hidden">
      {/* Decorative Snowflakes */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none opacity-20">
        <FaSnowflake size={120} className="text-white absolute top-8 left-4" />
        <FaSnowflake
          size={90}
          className="text-white absolute top-24 right-12"
        />
        <FaSnowflake
          size={100}
          className="text-white absolute bottom-10 left-16"
        />
      </div>

      <div className=" px-4 relative">
        <h2 className="text-4xl font-bold text-dark-brown mb-6">
          Winter Specials
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Warm up this winter with our seasonal drinks and treats. Only
          available for a limited time!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {winterItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl flex items-center flex-col transition-shadow relative"
              initial={{ opacity: 0, y: 20, scale: 0.8 }} // Initial state (hidden and slightly lower)
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }} // Animate to visible, original position, and scale up
              transition={{
                duration: 0.7, // Duration of the animation
                delay: index * 0.1, // Stagger the animation based on index
              }}
              viewport={{ once: true }} // Animation only plays once when in view
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                rel="preload"
                loading="eager"
                height={300}
                className="rounded-md  aspect-square object-cover "
              />
              <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>

              {/* Decorative Coffee Mug Icon */}
              <div className="absolute top-2 right-2 text-primary text-2xl">
                <FaMugHot />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={() => router.push("/menu")}
            className="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-accent transition-colors"
          >
            Explore Our Winter Menu
          </button>
        </div>
      </div>
    </section>
  );
};

const SummerSpecials = () => {
  const router = useRouter();

  return (
    <section className="py-12 bg-light-blue text-center relative overflow-hidden">
      {/* Decorative Snowflakes */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none opacity-20">
        <FaSnowflake size={120} className="text-white absolute top-8 left-4" />
        <FaSnowflake
          size={90}
          className="text-white absolute top-24 right-12"
        />
        <FaSnowflake
          size={100}
          className="text-white absolute bottom-10 left-16"
        />
      </div>

      <div className=" px-4 relative">
        <h2 className="text-4xl font-bold text-dark-brown mb-6">
          Summer Specials
        </h2>
        <p className="text-lg text-gray-700 mb-8">
        Beat the heat with our thick shakes, chilled coffees, mocktails, sundaes, and more!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {summerItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl flex items-center flex-col transition-shadow relative"
              initial={{ opacity: 0, y: 20, scale: 0.8 }} // Initial state (hidden and slightly lower)
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }} // Animate to visible, original position, and scale up
              transition={{
                duration: 0.7, // Duration of the animation
                delay: index * 0.1, // Stagger the animation based on index
              }}
              viewport={{ once: true }} // Animation only plays once when in view
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                rel="preload"
                loading="eager"
                height={300}
                className="rounded-md aspect-square object-cover "
              />
              <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>

              {/* Decorative Sparkle Icon */}
              <div className="absolute top-2 right-2 text-primary text-2xl rotate-180">
                <HiOutlineSparkles />
              </div>
              <div className="absolute top-2 left-2 text-primary text-2xl">
                <HiOutlineSparkles />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={() => router.push("/menu")}
            className="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-accent transition-colors"
          >
            Explore Our Summer Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export {WinterSpecials, SummerSpecials};
