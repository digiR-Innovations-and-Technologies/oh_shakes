import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
          
          {/* Column 1: Logo */}
          <div className="text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto md:mx-0"
            />
            <p className="mt-4 text-accent-secondary text-lg leading-relaxed">
              Your favorite coffee shop, where passion meets perfection.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-accent-secondary">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/menu" className="hover:underline">Menu</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-accent-secondary">Contact Us</h2>
            <ul className="space-y-2">
              <li>123 Coffee Street, Aroma City</li>
              <li>Email: contact@coffeeplace.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-accent-secondary">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="text-primary hover:text-accent-secondary">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-primary hover:text-accent-secondary">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-primary hover:text-accent-secondary">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-primary hover:text-accent-secondary">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CoffeePlace. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Developed by YourName. Designed with love for coffee enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
