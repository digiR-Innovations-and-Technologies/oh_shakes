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
                <link href="https://awards.infcdn.net/2024/circle_v3.css" 
                  rel="stylesheet"/>
              <div id="circle_bw" 
                data-length="29" 
                class="circle_bw_black" 
                onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.circle_bw_link').href);return 0;}">
                <p class="circle_bw_year">2026</p>
                <div class="circle_bw_name "> 
                  <a class="circle_bw_link" target="_blank" href="https://restaurant-guru.in/Oh-Shakes-Bikaner">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="178px" height="178px" viewBox="0 0 178 178">
                      <defs> <path id="circle_bw_name-arc" d="M 12 89 a 77 77 0 0 0 154 0"></path> </defs> <text class="circle_bw_name_txt " fill="#000" text-anchor="middle"> 
                        <textPath startOffset="50%" xlink:href="#circle_bw_name-arc"> 
                          Oh Shakes </textPath> </text> </svg> </a> </div> <div class="circle_bw_nom ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 200 200"> 
                              <defs> <path id="circle_bw_nom-arc1" d="M 30 100 a 70 70 0 1 1 140 0"></path> </defs> <text class="circle_bw_nom_txt " fill="#000" text-anchor="middle">
                                <textPath startOffset="50%" xlink:href="#circle_bw_nom-arc1">Recommended</textPath> </text> </svg> </div>
                <a class="circle_bw_home" style="font-size: 0" href="https://restaurantguru.com" target="_blank">Restaurant Guru</a></div>
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
