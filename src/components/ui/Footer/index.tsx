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

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold mb-4">Contact Us</h3>
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
                <span>info@ohshakes.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div>
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Station Rd, Kote Gate, Bikaner, Rajasthan 334001</span>
              </div>
            </div>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold mb-4">Useful Links</h3>
            <div className="space-y-2">
              {[
                "About Us",
                "Locations",
                "Careers",
                "Privacy Policy",
                "Shipping Policy",
                "Refund Policy",
                "Term & Conditions",
                "Contact Us",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Logo and App Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="/images/logo.png" alt="NBC Logo" className="mb-6" />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="py-6 text-center border-t text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © 2024 Oh Shakes. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
