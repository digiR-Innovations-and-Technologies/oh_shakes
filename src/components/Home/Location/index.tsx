"use client"; // Ensures this is treated as a client component

import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Location = () => {
  return (
    <section className="py-12 px-4 bg-light-brown">
      <div className=" flex flex-col md:flex-row justify-between md:items-start items-center">
        {/* Left Section: Details */}
        <motion.div
          className="flex-1 md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }} // Start from the left and hidden
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide in
          transition={{ duration: 0.5 }} // Duration of animation
          viewport={{ once: true }} // Animation plays once when in view
        >
          {/* Section Heading */}
          <div className="flex items-center gap-2 md:w-3/4 mb-6 mx-auto md:mx-0">
            <div className="h-[2px] bg-dark-brown flex-1"></div>
            <h1 className="text-4xl text-dark-brown font-bold text-center md:text-left">
              Our Location
            </h1>
            <div className="h-[2px] bg-dark-brown flex-1"></div>
          </div>

          {/* Location Details */}
          <div className="flex items-start mb-4 mx-auto md:mx-0 text-center md:text-left">
            <FaMapMarkerAlt className="text-dark-brown text-2xl mr-2" />
            <div>
              <p className="text-lg md:text-md">
                Station Rd, Kote Gate, Bikaner, Rajasthan 334001
              </p>
            </div>
          </div>

          {/* Hours of Operation */}
          <h2 className="text-2xl font-bold mb-2">Hours of Operation</h2>
          <div className="flex items-start mb-6 mx-auto md:mx-0 text-center md:text-left">
            <FaClock className="text-dark-brown text-2xl mr-2" />
            <div>
              <p className="text-lg md:text-md">Mon - Fri: 10 AM - 11:45 PM</p>
              <p className="text-lg md:text-md">Sat - Sun: 10 AM - 11:45 PM</p>
            </div>
          </div>

          {/* Contact Information */}
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <div className="flex items-center mb-6 mx-auto md:mx-0">
            <FaPhoneAlt className="text-dark-brown text-2xl mr-2" />
            <div className="">
              <p className="text-lg md:text-md">Phone: 099293 25262</p>
            </div>
          </div>

          {/* About the Cafe */}
          <h2 className="text-2xl font-bold mb-2">About Our Cafe</h2>
          <p className="text-lg md:text-md">
            At our cafe, we serve quality coffee and shakes in a welcoming
            atmosphere. Whether you need a quiet spot to work, catch up with
            friends, or enjoy a delicious cup of coffee, we’ve got you covered!
          </p>
        </motion.div>

        {/* Right Section: Map */}
        <motion.div
          className="flex-1 md:w-1/2 md:pl-8 w-full"
          initial={{ opacity: 0, y: 50 }} // Start from the right and hidden
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide in
          transition={{ duration: 0.5 }} // Duration of animation
          viewport={{ once: true }} // Animation plays once when in view
        >
          <div className="relative w-full h-[250px] md:h-[450px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3522.3323322082265!2d73.3141972!3d28.0143167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDAwJzUxLjUiTiA3M8KwMTgnNTEuMSJF!5e0!3m2!1sen!2sin!4v1729369008638!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
