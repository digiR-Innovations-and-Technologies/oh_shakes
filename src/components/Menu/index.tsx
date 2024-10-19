"use client";
import React from "react";
import Image from "next/image";
import { FiCoffee, FiBookOpen, FiSun, FiTrendingUp } from "react-icons/fi"; // Decorative icons

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
    category: "Sandwich",
    icon: <FiBookOpen />,
    items: [
      { name: "Veg Grilled Sandwich", price: 89 },
      { name: "Tandoori Veg Sandwich", price: 109 },
      { name: "Cheese Chilli Toast Sandwich", price: 119 },
      { name: "Veg Paneer Sandwich", price: 129 },
      { name: "Oh Shakes Special Sandwich", price: 159 },
    ],
  },
  {
    category: "Waffle",
    icon: <FiTrendingUp />,
    items: [
      { name: "Strawberry Cheese Cream", price: 139 },
      { name: "Blueberry Cheese Cream", price: 159 },
      { name: "Pure Nutella", price: 139 },
      { name: "Belgium Chocolate (Dark/Milk)", price: 139 },
      { name: "Oreo N Cream", price: 149 },
    ],
  },
];

const Menu = () => (
  <div className="px-6 py-12 ">
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-[2px] bg-dark-brown flex-1"></div>
        <h1 className="text-4xl font-bold text-dark-brown">Our Menu</h1>
        <div className="h-[2px] bg-dark-brown flex-1"></div>
      </div>

      {/* Menu Sections */}
      {menuData.map((section, index) => (
        <div key={index} className="mb-10">
          {/* Category Header */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl text-primary">{section.icon}</span>
            <h2 className="text-3xl font-semibold text-dark-brown">
              {section.category}
            </h2>
          </div>

          {/* Items List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-center justify-between bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/hero.jpg" // Placeholder image
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover aspect-square"
                  />
                  <span className="text-lg font-medium text-gray-800">
                    {item.name}
                  </span>
                </div>
                <span className="text-lg font-bold text-accent">
                  ₹{item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
