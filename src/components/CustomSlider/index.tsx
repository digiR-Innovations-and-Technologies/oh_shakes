"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./sliderStyle.css"; // Custom styles
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SliderFuncProps {
  children: React.ReactNode[];
  smallScreenSlide?: number;
}

interface ArrowProps {
  position: "left" | "right";
  icon: React.ReactNode;
}

const Arrow: React.FC<ArrowProps> = ({ position, icon }) => {
  return (
    <div
      className={` absolute z-10 md:p-8 md:text-2xl p-3 flex items-center justify-center text-lg text-white rounded-md cursor-pointer
        ${
          position === "left" ? "-left-2" : "-right-2"
        } top-1/2 transform -translate-y-1/2`}
    >
      {icon}
    </div>
  );
};

const CustomSlider: React.FC<SliderFuncProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow position="right" icon={<FaArrowRight />} />, // Hide next arrow
    prevArrow: <Arrow position="left" icon={<FaArrowLeft />} />, // Hide prev arrow
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="py-6">
      <Slider
        className="h-screen flex items-center justify-center"
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
};

export default CustomSlider;
