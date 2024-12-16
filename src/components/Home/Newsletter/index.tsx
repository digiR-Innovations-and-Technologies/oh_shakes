"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-100">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">SUBSCRIBE NEWSLETTER</h2>
        <form
          onSubmit={handleSubmit}
          className="flex md:flex-row flex-col items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button className="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-accent-secondary transition-colors">
            NEWSLETTER
          </button>
        </form>
      </motion.div>
    </section>
  );
}
