"use client";
import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js for optimized images
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../Sidebar";
import { useRouter } from "next/navigation";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onCloseModal = () => setIsOpen(false);
  return (
    <>
      <nav className="w-full top-0 z-50 bg-white text-white py-4 px-4">
        <div className="container mx-auto flex  justify-between gap-2 items-center ">
          {/* Logo Section */}
          <div onClick={() => router.push("/")} className="flex items-center">
            <Image
              src="/images/logo.png" // Path to your logo in the public folder
              alt="Cafe Logo"
              width={50}
              height={50}
            />
            <h1 className="ml-3 text-3xl text-dark-brown font-bold">
              <span className="text-primary">Oh</span> Shakes
            </h1>
          </div>

          {/* Links Section */}
          <ul className="md:flex text-dark-brown font-bold px-4 py-1 rounded-full hidden space-x-8">
            <li className="hover:text-accent">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-accent">
              <Link href="/menu">Our Menu</Link>
            </li>
            <li className="hover:text-accent">
              <Link href="/about">About Us</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="md:flex items-center hidden gap-4">
            <li className="text-dark-brown hover:text-accent transition hover:border-accent text-2xl border-2  border-dark-brown p-1 rounded-full">
              <a href="https://zomato.onelink.me/xqzv/6f9flr7g">
                <SiZomato />
              </a>
            </li>
            <li className="text-dark-brown hover:text-accent transition hover:border-accent text-2xl border-2  border-dark-brown p-1 rounded-full">
              <a href="https://www.swiggy.com/menu/632170?source=sharing">
                <SiSwiggy />
              </a>
            </li>
            <li className="text-dark-brown hover:text-accent transition hover:border-accent text-2xl border-2  border-dark-brown p-1 rounded-full">
              <a href="https://www.instagram.com/oh.shakes">
                <BsInstagram />
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="text-dark-brown md:hidden text-3xl"
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
