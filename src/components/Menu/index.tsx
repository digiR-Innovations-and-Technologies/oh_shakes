"use client";
import React, { ReactNode, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { IceCream } from "lucide-react";

import {
  Coffee,
  Milk,
  Cherry,
  Cookie,
  GlassWater,
  SandwichIcon,
  Soup,
  WheatIcon as Waffle,
} from "lucide-react";
import SearchInput from "@/components/ui/SearchInput";

export interface MenuItemType {
  name: string;
  price: number;
  largePrice?: number;
  description?: string;
}

export interface MenuSectionType {
  category: string;
  icon: ReactNode;
  items: MenuItemType[];
}

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  showLargeSize?: boolean;
}

// Menu
const menuInfo = [
  {
    section: "Italian Thick Shakes",
    subsections: [
      {
        category: "Fruit Shake",
        icon: <Milk />,
        description: "",
        items: [
          { name: "Vanilla", price: 69, largePrice: 99 },
          { name: "Pineapple Bits", price: 79, largePrice: 109 },
          { name: "Mango", price: 79, largePrice: 109 },
          { name: "Strawberry Bliss", price: 79, largePrice: 109 },
          { name: "Royal Vanilla", price: 89, largePrice: 119 },
          { name: "Black Currant Blast", price: 99, largePrice: 139 },
          { name: "Blueberry Trip", price: 109, largePrice: 149 },
          { name: "Sitafal", price: 119, largePrice: 159 },
          { name: "Mixed Berries", price: 119, largePrice: 159 },
          { name: "Light", price: 119, largePrice: 159 },
        ],
      },
      {
        category: "Traditional/Dry Fruites",
        icon: <Cherry />,
        description: "",
        items: [
          { name: "Gulkand", price: 79, largePrice: 109 },
          { name: "Gulab", price: 79, largePrice: 109 },
          { name: "Kaju Anjeer", price: 99, largePrice: 139 },
          { name: "Kaju Gulkand", price: 99, largePrice: 139 },
          { name: "Shahi Kesar", price: 99, largePrice: 139 },
          { name: "Royal Gulab", price: 99, largePrice: 139 },
          { name: "Badam Kesariya", price: 109, largePrice: 149 },
          { name: "Kaju Mango", price: 119, largePrice: 159 },
          { name: "Caramel Kaju", price: 119, largePrice: 159 },
          { name: "Badam Anjeer", price: 119, largePrice: 159 },
          { name: "Kesar Kaju", price: 139, largePrice: 189 },
          { name: "Royal Dry Fruit", price: 139, largePrice: 189 },
        ],
      },
      {
        category: "Nutella",
        icon: <Cookie />,
        description: "",
        items: [
          { name: "Pure Nutella", price: 149, largePrice: 209 },
          { name: "Nutella Nutties", price: 159, largePrice: 219 },
          { name: "Nutella Crunch", price: 159, largePrice: 219 },
          { name: "Nutella Rocher", price: 179, largePrice: 249 },
          { name: "Nutella Brownie", price: 179, largePrice: 249 },
          { name: "Nutella Nutties Max", price: 189, largePrice: 259 },
        ],
      },
      {
        category: "Cheese Shake",
        icon: <Milk />,
        description: "",
        items: [
          { name: "Mango Cheese Cake", price: 139, largePrice: 189 },
          { name: "Blueberry Cheese Cake", price: 139, largePrice: 189 },
          { name: "Strawberry Cheese Cake", price: 139, largePrice: 189 },
          { name: "Red Velvet Cheese Cake", price: 159, largePrice: 219 },
          { name: "Lotus Biscoff Cheese Cake", price: 179, largePrice: 239 },
        ],
      },
      {
        category: "Chocolate Mania",
        icon: <Cookie />,
        description: "",
        items: [
          { name: "Choco-Chip", price: 99, largePrice: 139 },
          { name: "Choco-OREO", price: 109, largePrice: 149 },
          { name: "Chocolate Kaju", price: 119, largePrice: 159 },
          { name: "Chocolate Magic", price: 119, largePrice: 159 },
          { name: "Kitkat Crunch", price: 119, largePrice: 159 },
          { name: "Choco-Brownie Fudge", price: 139, largePrice: 189 },
          { name: "OREO-Kitkat", price: 149, largePrice: 209 },
        ],
      },
      {
        category: "Hatke Shake",
        icon: <Milk />,
        description: "",
        items: [
          { name: "Choco Almond", price: 119, largePrice: 159 },
          { name: "Rajwadi Rajbhog", price: 119, largePrice: 159 },
          { name: "Gulab Jamun", price: 119, largePrice: 159 },
          { name: "Choco-Bar", price: 119, largePrice: 159 },
          { name: "Motichoor", price: 129, largePrice: 179 },
          { name: "OREO Blueberry", price: 139, largePrice: 189 },
          { name: "Roasted Hazelnut", price: 149, largePrice: 209 },
          { name: "Brownie Kitkat Nutella", price: 189, largePrice: 259 },
        ],
      },
      {
        category: "Ever Green Shakes",
        icon: <Milk />,
        description: "",
        items: [
          { name: "Vanilla & Chips", price: 89, largePrice: 119 },
          { name: "Crunchy Gulab", price: 89, largePrice: 119 },
          { name: "Crunchy Butterscotch", price: 99, largePrice: 139 },
          { name: "Caramel Crunch", price: 99, largePrice: 139 },
          { name: "OREO Vanilla", price: 99, largePrice: 139 },
          { name: "Bubblegum", price: 129, largePrice: 179 },
          { name: "OREO Strawberry", price: 129, largePrice: 179 },
        ],
      },
      {
        category: "Cold Coco (Gujarat's Famous)",
        icon: <GlassWater />,
        description: "",
        items: [
          { name: "Cold Coco", price: 89 },
          { name: "Cold Coco With Choco Chips", price: 109 },
          { name: "Cold Coco With Ice-cream", price: 119 },
        ],
      },
    ]
  },
  {
    section: "Coffee Delights",
    subsections: [
      {
        category: "Frappe (Cold Coffee)",
        icon: <Coffee />,
        description: "350ml",
        items: [
          { name: "Creamy Frappe", price: 129 },
          { name: "Choco Frappe", price: 139 },
          { name: "Caramel Frappe", price: 139 },
          { name: "Hazelnut Frappe", price: 149 },
          { name: "Choco Chips Frappe", price: 149 },
          { name: "Tiramisu Frappe", price: 149 },
          { name: "Irish Frappe", price: 159 },
          { name: "Oreo Frappe", price: 149 },
          { name: "Nutella Frappe", price: 169 },
          { name: "Brownie Frappe", price: 179 },
        ],
      },
      {
        category: "Hot Coffee",
        icon: <Coffee />,
        description: "without milk",
        items: [
          { name: "Espresso", price: 70, description: "Coffee shot 30 ml" },
          { name: "Doppio", price: 89, description: "Coffee shot 60 ml" },
          {
            name: "Americano",
            price: 99,
            description: "Coffee shot with hot water",
          },
        ],
      },
      {
        category: "Hot Coffee",
        icon: <Coffee />,
        description: "with milk",
        items: [
          { name: "Latte", price: 89 },
          { name: "Cappuccino", price: 89 },
          { name: "Cortado", price: 99 },
          { name: "Mochaccino", price: 99 },
          { name: "Affogato", price: 99 },
        ],
      },
      {
        category: "Flavour Hot Coffee",
        icon: <Coffee />,
        description: "with milk",
        items: [
          { name: "Irish Cappuccino/Latte", price: 119 },
          { name: "Tiramisu Cappuccino/Latte", price: 119 },
          { name: "Hazelnut Cappuccino/Latte", price: 119 },
          { name: "Caramel Cappuccino/Latte", price: 119 },
          { name: "Nutella Cappuccino/Latte", price: 129 },
          { name: "Biscoff Cappuccino/Latte", price: 139 },
          { name: "French Vanilla Cappuccino/Latte", price: 139 },
        ],
      },
      {
        category: "Hot Chocolate",
        icon: <Coffee />,
        description: "250ml",
        items: [
          { name: "Creamy Hot Chocolate", price: 129 },
          { name: "Classic Hot Nutella", price: 139 },
          { name: "Walnut Brownie With Ice Cream", price: 169 },
        ],
      },
      {
        category: "Thick Cold Coffee",
        icon: <Coffee />,
        description: "Add Ice Cream @ ₹30",
        items: [
          { name: "Coffee Hazelnut", price: 109 },
          { name: "Coffee Mocha", price: 119 },
          { name: "Coffee Tiramisu", price: 139 },
          { name: "Coffee Irish", price: 139 },
          { name: "Coffee Caramel", price: 139 },
          { name: "Coffee Brownie", price: 149 },
        ],
      },
      {
        category: "Iced Coffee",
        icon: <Coffee />,
        description: "350ml",
        items: [
          { name: "Iced Coffee", price: 129 },
          { name: "Mocha Marble", price: 139 },
          { name: "Salted Caramel", price: 139 },
          { name: "Iced Vanilla Latte", price: 139 },
        ],
      },
    ]
  },
  {
    section: "Drizzles & Delights",
    subsections: [
        {
            category: "Scoops",
            icon: <IceCream />,
            description: "",
            items: [
              { name: "American Nuts", price: 59 },
              { name: "Chocolate", price: 59 },
              { name: "Choco Vanilla", price: 59 },
              { name: "Black Currant", price: 59 },
              { name: "Paan", price: 59 },
              { name: "Pista Malai", price: 59 },
            ],
          },
          {
            category: "Mocktails",
            icon: <GlassWater />,
            description: "",
            items: [
              { name: "Classic Lemonade", price: 69 },
              { name: "Virgin Mojito", price: 99 },
              { name: "Strawberry Mojito", price: 99 },
              { name: "Mango Mojito", price: 99 },
              { name: "Blue Lagoon", price: 99 },
              { name: "Marinda Mocktai", price: 99 },
              { name: "Blueberry Mojito", price: 129 },
            ],
          },
          {
              category: "Waffle",
              icon: <Waffle />,
              description: "Add on Ice Cream @20",
              items: [
                { name: "Strawberry Cheese Cream", price: 139 },
                { name: "Blueberry Cheese Cream", price: 159 },
                { name: "Pure Nutella", price: 139 },
                { name: "Kitkat", price: 139 },
                { name: "Belgium Chocolate", price: 139 },
                { name: "Oreo N Cream", price: 149 },
              ],
            },
            {
              category: "Sundaes",
              icon: <IceCream />,
              description: "",
              items: [
                { name: "Black & White", price: 109 },
                { name: "Oreo", price: 109 },
                { name: "Death By Chocolate", price: 129 },
                { name: "Pineapple Cream", price: 119 },
                { name: "Kitkat Crunch", price: 129 },
                { name: "Special Dry Fruit", price: 149 },
              ],
            },
            {
              category: "Family Sundae",
              icon: <IceCream />,
              description: "",
              items: [
                { name: "Chocolate King", price: 239 },
                { name: "Dry Fruit Special", price: 249 },
              ],
            },
            {
              category: "Add-Ons",
              icon: <Cherry />,
              description: "",
              items: [
                { name: "Ice-Creme(Vanilla)", price: 30 },
                { name: "Choco Chips", price: 25 },
                { name: "OREO/Kitkat/Dairy Milk", price: 25 },
              ],
            },
    ]
  },
  {
    section: "Snacks",
    subsections: [
        {
            category: "Sandwich",
            icon: <SandwichIcon />,
            description: "Add on cheese @30",
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
            icon: <Soup />,
            description: "Add on cheese @30",
            items: [
              { name: "Veg Maggie", price: 59 },
              { name: "Tandoori Maggie", price: 79 },
              { name: "Veg Paneer Maggie", price: 89 },
              { name: "Tandoori Paneer Maggie", price: 99 },
              { name: "Cheese & Corn Maggie", price: 99 },
            ],
          },
          {
              category: "Patties",
              icon: <SandwichIcon />,
              description: "",
              items: [
                { name: "Mayo Patties", price: 30 },
                { name: "Spicy Patties", price: 40 },
                { name: "Masala Patties", price: 40 },
                { name: "Makhni Patties", price: 50 },
                { name: "Chur Chur Patties", price: 70 },
              ],
            },
    ]
  }
]

function MenuItem({
  item,
  index,
  showLargeSize = false,
  searchTerm = "",
}: MenuItemProps & { searchTerm?: string }) {
  const highlightText = (text: string) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <span key={i} className="bg-yellow-200">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <motion.div
      className="flex items-center justify-between bg-white/90 backdrop-blur rounded-lg p-4 border cursor-pointer hover:shadow-sm transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex-1">
        <p className="text-lg font-semibold text-gray-900">
          {highlightText(item.name)}
        </p>
        {item.description && (
          <p className="text-sm text-gray-600">
            {highlightText(item.description)}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-primary">₹{item.price}</span>
        {showLargeSize && item.largePrice && (
          <span className="text-xl font-bold text-primary">
            L: ₹{item.largePrice}
          </span>
        )}
      </div>
    </motion.div>
  );
}

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = useMemo(() => {
    return menuInfo
      .map((section) => {
        // Check if section name matches search term
        const matchesSection = section.section.toLowerCase().includes(searchTerm.toLowerCase());
  
        const filteredSubsections = section.subsections
          .map((sub) => {
            // Check if category name matches search term
            const matchesCategory = sub.category.toLowerCase().includes(searchTerm.toLowerCase());
  
            // Filter items based on search term
            const filteredItems = sub.items.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
  
            return matchesCategory || filteredItems.length > 0
              ? { ...sub, items: filteredItems.length > 0 ? filteredItems : sub.items }
              : null;
          })
          .filter(Boolean);
  
        return matchesSection || filteredSubsections.length > 0
          ? { ...section, subsections: filteredSubsections.length > 0 ? filteredSubsections : section.subsections }
          : null;
      })
      .filter(Boolean);
  }, [searchTerm]);
  

  return (
    <div className="px-6 py-12 bg-gradient-to-br min-h-[60vh] from-white via-light-pink to-light-yellow">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[2px] bg-dark-brown flex-1 max-w-[200px]"></div>
          <h1 className="text-5xl font-extrabold text-dark-brown">Our Menu</h1>
          <div className="h-[2px] bg-dark-brown flex-1 max-w-[200px]"></div>
        </div>

        {/* Search Input */}
        <SearchInput value={searchTerm} onChange={setSearchTerm} />

        {/* Menu Sections */}
        {filteredMenu.length > 0 ? (
            filteredMenu.map((data) => (
                <motion.section
                key={data?.section}
                className="mb-12 p-2 border rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-5xl font-bold text-gray-900 border-b-[2px] border-primary">{data?.section}:</h2>
                    </div>
                    {data?.subsections.map((section) => (
            <motion.section
              key={section?.category}
              className="mb-12 border-b p-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl text-primary">{section?.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900">
                  {section?.category}
                </h2>
                {section?.description && <span className="flex h-[36px] items-end text-sm">({section?.description})</span>}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section?.items.map((item, index) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                    index={index}
                    showLargeSize={true}
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            </motion.section>
          ))}
                </motion.section>
            ))
        ) : (
            <div className="text-center text-gray-600">
            No items found for {searchTerm}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
