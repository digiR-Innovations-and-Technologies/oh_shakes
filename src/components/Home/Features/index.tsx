"use client";

import { motion } from "framer-motion";
import { MapPin,  Clock, Leaf } from "lucide-react";
import { BiRupee } from "react-icons/bi";

const features = [
  {
    icon: MapPin,
    title: "EASY APPROACHABILITY & PICK-UP",
  },
  {
    icon: BiRupee,
    title: "BEST QUALITY THICK SHAKE AT GOOD PRICING",
  },
  {
    icon: Clock,
    title: "OPEN TILL 12 PM (MIDNIGHT)",
  },
  {
    icon: Leaf,
    title: "HYGIENIC & FRESH INGREDIENTS",
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
        WE PROVIDE THE BEST SERVICE IN YOUR CITY
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-primary/10 shadow-md rounded-lg overflow-hidden h-full">
              <div className="p-6 flex items-center justify-center flex-col">
                <feature.icon className="w-12 h-12 mb-4 text-dark-brown" />
                <p className="text-center text-sm font-medium text-gray-800">
                  {feature.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
