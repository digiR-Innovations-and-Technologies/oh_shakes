"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SliderFuncProps {
  children: React.ReactNode[];
  smallScreenSlide?: number;
}

interface ArrowProps {
  position: "left" | "right";
  icon: React.ReactNode;
  onClick?: () => void; // Added onClick prop
}

const Arrow: React.FC<ArrowProps> = ({ position, icon, onClick }) => {
  return (
    <div
      onClick={onClick} // Handle click
      className={`absolute z-10 md:p-4 p-1 flex items-center justify-center text-md text-white bg-dark-brown rounded-full cursor-pointer
        ${
          position === "left" ? "left-6" : "right-6"
        } top-1/2 transform -translate-y-1/2`}
    >
      {icon}
    </div>
  );
};

const CustomSlider: React.FC<SliderFuncProps> = ({ children }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow position="right" icon={<FaArrowRight />} />,
    prevArrow: <Arrow position="left" icon={<FaArrowLeft />} />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="">
      <Slider
        className="lg:h-screen h-1/2 flex items-center justify-center"
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
};

export default CustomSlider;
