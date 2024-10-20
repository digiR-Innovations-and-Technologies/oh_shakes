import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
} from "react-icons/fa";

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
            <h2 className="text-xl font-semibold text-accent-secondary">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:underline">
                  Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-accent-secondary">
              Contact Us
            </h2>
            <ul className="space-y-2">
              <li>Station Rd, Kote Gate, Bikaner, Rajasthan 334001</li>
              <li>Phone: 099293 25262</li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-accent-secondary">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/oh.shakes/"
                className="text-primary hover:text-accent-secondary"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Oh Shakes. All rights reserved.
          </p>
          <p className="text-sm text-gray-200 mt-2">
            Developed by{" "}
            <a className="font-bold" href="https://digirinnovations.com">
              Digir Innovations
            </a>
            . Designed with love for coffee enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
