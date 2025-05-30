"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { MdStore } from "react-icons/md";
import { TiInfoLargeOutline } from "react-icons/ti";

const usefulLinks = [
  {
    title: "About Us",
    href: "/about",
    icon: <TiInfoLargeOutline />,
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: <FiPhone />,
  },
  {
    title: "Own Franchise",
    href: "/franchise",
    icon: <MdStore />,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: <GoBook />,
  },
];

type SocialLinks = {
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  swiggy: string;
  zomato: string;
};

export default function Footer() {
  const [links, setLinks] = useState<SocialLinks | null>(null);

  useEffect(() => {
    fetch("/social-links.json")
      .then((res) => res.json())
      .then((data: SocialLinks) => setLinks(data))
      .catch((err) => console.error("Error loading social links:", err));
  }, []);

  return (
    <footer className="bg-gray-50 flex items-center justify-center border-t">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 ">
           {/* Logo and App Downloads */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:border-r-[1px] lg:border-r-[1px] flex justify-center items-center"
          >
            <Image
              width={100}
              height={100}
              src="/images/logo.png"
              alt="OhShakes Logo"
              className="scale-[1.8] hover:scale-[1.7] transition"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:border-r-[1px]"
          >
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">Oh Shakes</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <div>
                  <Phone className="w-4 h-4" />
                </div>
                <span>(+91) 099293 25262</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div>
                  <Mail className="w-4 h-4" />
                </div>
                <a
                href="mailto:ohshakes6999@gmail.com"
                >ohshakes6999@gmail.com</a>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <div>
                  <MapPin className="w-4 h-4 mt-1" />
                </div>
                <span>Station Rd, Kote Gate, Bikaner, Rajasthan 334001</span>
              </div>
            </div>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:border-r-[1px] lg:border-r-[1px]"
          >
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="space-y-2">
              {[
                {
                  icon: <Facebook className="w-4 h-4" />,
                  name: "Facebook",
                  href: `${links?.facebook}`,
                },
                {
                  icon: <Twitter className="w-4 h-4" />,
                  name: "Twitter",
                  href: `${links?.twitter}`,
                },
                {
                  icon: <Instagram className="w-4 h-4" />,
                  name: "Instagram",
                  href: `${links?.instagram}`,
                },
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  name: "Linkedin",
                  href: `${links?.linkedin}`,
                }
              ].map((social, index) => (
                <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-1/2"
                >
                  <div className="flex flex-row gap-2 justify-center items-center">
                  {social.icon} 
                  {social.name}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <div className="space-y-2">
              {usefulLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  {link.icon}
                  {link.title}
                </Link>              
              ))}
            </div>
          </motion.div>

        </div>

        {/* Copyright */}
        <motion.div
          className="py-6 text-center border-t text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © 2025 Oh Shakes. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
