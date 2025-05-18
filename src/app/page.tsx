import AboutUs from "@/components/Home/AboutUs";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Location from "@/components/Home/Location";
import { Newsletter } from "@/components/Home/Newsletter";
import ShopImages from "@/components/Home/ShopImages";
import Testimonials from "@/components/Home/Testimonials";
import WhatWeSell from "@/components/Home/WhatWeSell";
import {SummerSpecials} from "@/components/Home/Specials";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutUs />
      <SummerSpecials />
      <ShopImages />
      <WhatWeSell />
      <Features />
      <Testimonials />
      <Location />
      <Newsletter />
    </div>
  );
};

export default Home;
