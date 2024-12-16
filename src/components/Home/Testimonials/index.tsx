"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Becoming a must stop for all coffee lovers. NBC gained popularity by its tonk road outlet and now for ruling more, it has come up with its new outlet in cscheme. With a lot more add onns in menu makes menu a lot more interesting. Apart from drinks I would definitely like to suggest their Tandoori moagi and Brownie with ice-cream. Shortage of space in outlet is totally covered by seating in porch outside.",
    author: "Anonymous",
  },
  {
    content:
      "It is one of the best stops for coffee lovers. You can have delectable hot and cold coffee as they have a wide range of flavours and types of coffee to choose from. Apart from coffee, you can also enjoy amazing shakes at affordable prices. NBC is also located at other places in Jaipur where you can enjoy your coffee.",
    author: "Chinmay Kumawat",
  },
  {
    content:
      "Really loved almost all flavours of hot and cold coffee. I love how quickly they turn up with your order and every time the same taste. Starbucks will definitely take a hit due to NBC. Keep up the good work guys!",
    author: "Bharat Agarwal",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="flex items-center gap-4 md:w-1/2 mx-auto">
        <div className="h-[2px] bg-dark-brown flex-1"></div>
        <h1 className="text-4xl text-dark-brown font-bold">What Our Customers Saying?</h1>
        <div className="h-[2px] bg-dark-brown flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-primary/10 shadow-md rounded-lg overflow-hidden h-full">
              <div className="p-6">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="font-medium text-gray-900">
                  {testimonial.author}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
