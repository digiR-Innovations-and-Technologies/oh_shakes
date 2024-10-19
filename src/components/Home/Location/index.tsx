"use client"; // Ensures this is treated as a client component

import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

const Location = () => {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between md:items-center items-start">
        {/* Right Section: Details */}
        <div className="flex-1 md:w-1/3">
          {" "}
          <div className="flex items-center gap-4 md:w-1/2 mb-6">
            <div className="h-[2px] bg-dark-brown flex-1"></div>
            <h1 className="text-4xl text-dark-brown font-bold">Our Location</h1>
            <div className="h-[2px] bg-dark-brown flex-1"></div>
          </div>
          {/* Adjusted width */}
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-dark-brown text-3xl mr-2" />
            <div className="text-left">
              <p className="text-md">123 Cafe Street, Coffee Town, CA 90001</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Hours of Operation</h2>
          <div className="flex items-center mb-4">
            <FaClock className="text-dark-brown text-3xl mr-2" />
            <div className="text-left">
              <p className="text-md">Monday - Friday: 7 AM - 9 PM</p>
              <p className="text-md">Saturday - Sunday: 8 AM - 10 PM</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-dark-brown text-3xl mr-2" />
            <div className="text-left">
              <p className="text-md">Phone: (123) 456-7890</p>
              <p className="text-md">Email: info@yourcafe.com</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">About Our Cafe</h2>
          <p className="text-md">
            At our cafe, we believe in serving quality coffee and delightful
            pastries in a welcoming atmosphere. Whether you&apos;re looking for
            a quiet place to work, a cozy spot to catch up with friends, or just
            a delicious cup of coffee, we have something for everyone!
          </p>
        </div>
        <div className="flex-1 mb-6 mt-6 md:mt-0 md:mb-0 md:pr-6 md:w-2/3">
          {" "}
          {/* Adjusted width */}
          <div className="relative w-full" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3522.3323322082265!2d73.3141972!3d28.0143167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDAwJzUxLjUiTiA3M8KwMTgnNTEuMSJF!5e0!3m2!1sen!2sin!4v1729369008638!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{
                border: "0",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              color="red"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-primary {
          color: #5755fe; /* Your primary color */
        }
        @media (max-width: 768px) {
          /* Adjustments for small screens */
          .flex-1 {
            width: 100%; /* Full width for small screens */
          }
        }
      `}</style>
    </section>
  );
};

export default Location;
