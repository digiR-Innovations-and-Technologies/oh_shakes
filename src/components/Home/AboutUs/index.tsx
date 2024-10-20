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
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }} // Only animate once when in view
        >
          <Image
            src="/images/cafe-about.jpg"
            alt="Cafe Interior"
            width={500}
            rel="preload"
            loading="eager"
            height={400}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }} // Only animate once when in view
        >
          <h2 className="text-3xl font-bold text-dark-brown">Our Story</h2>
          <p className="mt-4 text-lg leading-relaxed">
            At Oh Shakes, we believe in crafting the perfect cup for each
            customer. Our journey started 10 years ago, and since then, we’ve
            been passionate about serving the finest coffee in a cozy, welcoming
            environment. Join us for a unique experience that blends tradition
            with modern flavors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
