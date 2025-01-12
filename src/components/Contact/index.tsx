"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt, FaClipboardCheck, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import SuccessModal from "../SuccessModal";

const Loader = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setIsSuccessModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 md:gap-24 gap-6 ">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from the left and hidden
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide in
          transition={{ duration: 0.5 }} // Duration of animation
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-2  mb-6 mx-auto md:mx-0">
            <div className="h-[2px] bg-dark-brown flex-1"></div>
            <h1 className="text-4xl text-dark-brown font-bold text-center md:text-left">
              Contact Us
            </h1>
            <div className="h-[2px] bg-dark-brown flex-1"></div>
          </div>

          {/* Location Details */}
          <div className="flex items-start mb-4 mx-auto md:mx-0 text-center md:text-left">
            <FaMapMarkerAlt className="text-dark-brown text-2xl mr-2" />
            <div>
              <p className="text-lg md:text-md">
                Station Rd, Kote Gate, Bikaner, Rajasthan 334001
              </p>
            </div>
          </div>

          {/* Hours of Operation */}
          <h2 className="text-2xl font-bold mb-2">Hours of Operation</h2>
          <div className="flex items-start mb-6 mx-auto md:mx-0 text-center md:text-left">
            <FaClipboardCheck className="text-dark-brown text-2xl mr-2" />
            <div>
              <p className="text-lg md:text-md">Mon - Fri: 11 AM - 11:45 PM</p>
              <p className="text-lg md:text-md">Sat - Sun: 11 AM - 11:45 PM</p>
            </div>
          </div>

          {/* Contact Information */}
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <div className="flex items-center mb-6 mx-auto md:mx-0">
            <FaPhoneAlt className="text-dark-brown text-2xl mr-2" />
            <div className="">
              <p className="text-lg md:text-md">Phone: 099293 25262</p>
            </div>
          </div>

          {/* About the Cafe */}
          <h2 className="text-2xl font-bold mb-2">About Our Cafe</h2>
          <p className="text-lg md:text-md">
            At our cafe, we serve quality coffee and pastries in a welcoming
            atmosphere. Whether you need a quiet spot to work, catch up with
            friends, or enjoy a delicious cup of coffee, we’ve got you covered!
          </p>
        </motion.div>

        {/* Right Column - Form */}
        <div className="bg-white md:p-6 p-4 rounded-lg shadow-sm border">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Leave us a message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                className="w-full px-3 resize-none py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="space-y-4">
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-6 w-[200px] rounded-full shadow-lg hover:bg-accent transition-colors"
                >
                  {loading ? <Loader /> : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <motion.div
        className=" w-full mt-8"
        initial={{ opacity: 0, y: 50 }} // Start from the right and hidden
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide in
        transition={{ duration: 0.5 }} // Duration of animation
        viewport={{ once: true }} // Animation plays once when in view
      >
        <div className="relative w-full h-[250px] md:h-[450px] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3522.3323322082265!2d73.3141972!3d28.0143167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDAwJzUxLjUiTiA3M8KwMTgnNTEuMSJF!5e0!3m2!1sen!2sin!4v1729369008638!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}
