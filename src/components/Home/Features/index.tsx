"use client";

import { motion } from "framer-motion";
import { MapPin, Truck, Coffee } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "EASY APPROACHABILITY & PICK UPS",
  },
  {
    icon: Truck,
    title: "BEST QUALITY COFFEE AT MINIMUM PRICING",
  },
  {
    icon: Coffee,
    title: "TASTY ON-THE-GO COFFEE",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="flex items-center gap-4 md:w-1/2 mb-4 mx-auto">
        <div className="h-[2px] bg-dark-brown flex-1"></div>
        <h1 className="text-4xl text-dark-brown font-bold">WHY CHOOSE US</h1>
        <div className="h-[2px] bg-dark-brown flex-1"></div>
      </div>
      <motion.p
        className="text-center text-gray-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        WE ARE PROVIDE BEST SERVICE IN YOUR CITY
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-primary/10 shadow-md rounded-lg overflow-hidden h-full">
              <div className="p-6 flex items-center justify-center flex-col">
                <feature.icon className="w-12 h-12 mb-4" />
                <p className=" text-sm">{feature.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
