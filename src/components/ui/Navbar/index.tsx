"use client";
import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js for optimized images
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = () => setIsOpen(false);
  return (
    <>
      <nav className="w-full top-0 z-50 bg-white text-white py-4 px-4">
        <div className="container mx-auto flex md:justify-center justify-between md:flex-col gap-2 items-center ">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png" // Path to your logo in the public folder
              alt="Cafe Logo"
              width={50}
              height={50}
            />
            <h1 className="ml-3 text-3xl text-primary font-bold">
              <span className="text-accent">Oh</span> Shakes
            </h1>
          </div>

          {/* Links Section */}
          <ul className="md:flex text-white px-4 py-1 bg-primary rounded-full hidden space-x-8">
            <li className="hover:text-accent">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-accent">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="hover:text-accent">
              <Link href="/about">About Us</Link>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="text-accent md:hidden text-3xl"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <Sidebar isOpen={isOpen} onClose={onCloseModal} />
    </>
  );
};

export default Navbar;
