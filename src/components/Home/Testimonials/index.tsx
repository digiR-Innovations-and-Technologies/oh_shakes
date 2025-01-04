"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="flex items-center gap-4 md:w-1/2 mx-auto">
        <div className="h-[2px] bg-dark-brown flex-1"></div>
        <h1 className="md:text-4xl text-3xl text-dark-brown text-center font-bold">
          What Our Customers Saying?
        </h1>
        <div className="h-[2px] bg-dark-brown flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8 ">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="  rounded-lg h-[400px] overflow-hidden bg-primary/20  ">
                <video
                  src={`/videos/reviews/review${index + 1}.mp4`}
                  controls
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
