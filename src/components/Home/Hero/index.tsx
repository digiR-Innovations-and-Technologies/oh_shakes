"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const LeftArrow = () => {
  return (
    <div className="custom-prev  select-none text-white absolute top-[50%] left-4 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
      <FaChevronLeft className="text-xl" />
    </div>
  );
};

export const RightArrow = () => {
  return (
    <div className="custom-next select-none text-white absolute top-[50%] right-4 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
      <FaChevronRight className="text-xl" />
    </div>
  );
};

function VariableWidthSwiper() {
  return (
    <div className=" w-full ">
      {/* Main Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-2 "
      >
        <Swiper
          modules={[Navigation, Thumbs, Autoplay, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={30}
          autoplay={{
            delay: 3000,
          }}
          pagination={true}
          breakpoints={{}}
          loop={true}
          className="h-[300px] md:h-[650px] w-full"
        >
          <SwiperSlide
            style={{ width: "auto" }}
            className="flex items-center justify-center"
          >
            <div className="h-full w-auto">
              <Image
                src={"/images/hero/image1.jpeg"}
                alt="image 1"
                width={800}
                height={400}
                className="object-cover h-full w-auto rounded-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "auto" }}
            className="flex items-center justify-center"
          >
            <div className="h-full w-auto">
              <Image
                src={"/images/hero/image2.jpeg"}
                alt="image 2"
                width={800}
                height={400}
                className="object-cover h-full w-auto rounded-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "auto" }}
            className="flex items-center justify-center"
          >
            <div className="h-full w-auto">
              <Image
                src={"/images/hero/image3.jpeg"}
                alt="image 3"
                width={800}
                height={400}
                className="object-cover h-full w-auto rounded-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "auto" }}
            className="flex items-center justify-center"
          >
            <div className="h-full w-auto">
              <Image
                src={"/images/hero/image4.jpeg"}
                alt="image 3"
                width={800}
                height={400}
                className="object-cover h-full w-auto rounded-lg"
              />
            </div>
          </SwiperSlide>

          <LeftArrow />
          <RightArrow />
        </Swiper>
      </motion.div>
    </div>
  );
}

export default VariableWidthSwiper;
