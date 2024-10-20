"use client";
import React from "react";
import { BiFridge } from "react-icons/bi";
import { FiCoffee, FiBookOpen, FiSun, FiTrendingUp } from "react-icons/fi"; // Decorative icons
import { motion } from "framer-motion";

const menuData = [
  {
    category: "Frappe (Cold Coffee)",
    icon: <FiSun />,
    items: [
      { name: "Creamy Frappe", price: 129 },
      { name: "Choco Frappe", price: 139 },
      { name: "Caramel Frappe", price: 139 },
      { name: "Hazelnut Frappe", price: 149 },
      { name: "Tiramisu Frappe", price: 149 },
      { name: "Nutella Frappe", price: 169 },
      { name: "Oreo Frappe", price: 149 },
      { name: "Irish Frappe", price: 159 },
      { name: "Brownie Frappe", price: 179 },
    ],
  },
  {
    category: "Hot Coffee (with Milk)",
    icon: <FiCoffee />,
    items: [
      { name: "Latte", price: 89 },
      { name: "Cappuccino", price: 89 },
      { name: "Cortado", price: 99 },
      { name: "Mochaccino", price: 99 },
      { name: "Affogato", price: 99 },
    ],
  },
  {
    category: "Flavour Hot Coffee (with Milk)",
    icon: <FiCoffee />,
    items: [
      { name: "Irish Cappuccino / Latte", price: 119 },
      { name: "Tiramisu Cappuccino / Latte", price: 119 },
      { name: "Hazelnut Cappuccino / Latte", price: 119 },
      { name: "Caramel Cappuccino / Latte", price: 119 },
      { name: "Nutella Cappuccino / Latte", price: 129 },
      { name: "Biscoff Cappuccino / Latte", price: 139 },
      { name: "French Vanilla", price: 139 },
    ],
  },
  {
    category: "Hot Coffee (without Milk)",
    icon: <FiCoffee />,
    items: [
      { name: "Espresso (30ml)", price: 70 },
      { name: "Doppio (60ml)", price: 89 },
      { name: "Americano", price: 99 },
    ],
  },
  {
    category: "Iced Coffee",
    icon: <BiFridge />,
    items: [
      { name: "Iced Coffee", price: 129 },
      { name: "Mocha Marble", price: 139 },
      { name: "Salted Caramel", price: 139 },
      { name: "Iced Vanilla Latte", price: 139 },
    ],
  },
  {
    category: "Sandwich",
    icon: <FiBookOpen />,
    items: [
      { name: "Veg Grilled Sandwich", price: 89 },
      { name: "Tandoori Veg Sandwich", price: 109 },
      { name: "Cheese Chilli Toast Sandwich", price: 119 },
      { name: "Veg Paneer Sandwich", price: 129 },
      { name: "Paneer Makhni Sandwich", price: 149 },
      { name: "Oh Shakes Special Sandwich", price: 159 },
    ],
  },
  {
    category: "Maggie",
    icon: <FiTrendingUp />,
    items: [
      { name: "Veg Maggie", price: 59 },
      { name: "Tandoori Maggie", price: 79 },
      { name: "Paneer Maggie", price: 89 },
      { name: "Cheese & Corn Maggie", price: 99 },
    ],
  },
  {
    category: "Waffle",
    icon: <FiTrendingUp />,
    items: [
      { name: "Strawberry Cheese Cream", price: 139 },
      { name: "Blueberry Cheese Cream", price: 159 },
      { name: "Pure Nutella", price: 139 },
      { name: "Kitkat", price: 139 },
      { name: "Belgium Chocolate", price: 139 },
      { name: "Oreo N Cream", price: 149 },
    ],
  },
];

const Menu = () => (
  <div className="px-6 py-12 bg-gradient-to-br from-white via-light-pink to-light-yellow">
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-[2px] bg-dark-brown flex-1"></div>
        <h1 className="text-5xl font-extrabold text-dark-brown">Our Menu</h1>
        <div className="h-[2px] bg-dark-brown flex-1"></div>
      </div>

      {/* Menu Sections */}
      {menuData.map((section, index) => (
        <div key={index} className="mb-14">
          {/* Category Header */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl text-primary">{section.icon}</span>
            <h2 className="text-4xl font-semibold text-dark-brown">
              {section.category}
            </h2>
          </div>

          {/* Items List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((item, itemIndex) => (
              <motion.li
                key={itemIndex}
                className="flex items-center justify-between bg-white rounded-lg p-6 shadow-md transition-all hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }} // Start off-screen and hidden
                whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                transition={{
                  duration: 0.5,
                  delay: itemIndex * 0.1, // Stagger animations
                }}
                viewport={{ once: true }} // Animation plays once when in view
              >
                <span className="text-xl font-medium text-gray-900">
                  {item.name}
                </span>
                <span className="text-2xl font-bold text-accent">
                  ₹{item.price}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
