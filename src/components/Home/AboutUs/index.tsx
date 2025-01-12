"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: 20, // Start from a lower position
      scale: 0.9, // Start slightly smaller
    },
    visible: {
      opacity: 1,
      y: 0, // Move to the original position
      scale: 1, // Scale to original size
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-12 px-4 bg-light-brown">
      <div className="flex flex-col-reverse md:flex-row gap-8 ">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }} // Only animate once when in view
        >
          <Image
            src="/images/shop2.jpeg"
            alt="Cafe Interior"
            width={500}
            rel="preload"
            loading="eager"
            height={350}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left w-full"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }} // Only animate once when in view
        >
          <h2 className="text-3xl font-bold text-dark-brown">Our Story</h2>
          <p className="mt-4 text-lg leading-relaxed">
            At Oh Shakes, we believe in crafting the perfect cup for each
            customer. we’ve been passionate about serving the finest coffee in a
            cozy, welcoming environment.
            <br /> <br />
            Over the years, we’ve expanded our menu to include a variety of
            beverages and desserts, each crafted with the same attention to
            quality and flavor. Whether you&apos;re starting your day or winding
            down, Oh Shakes is the perfect spot to relax and enjoy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
