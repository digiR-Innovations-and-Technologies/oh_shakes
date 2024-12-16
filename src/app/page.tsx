import AboutUs from "@/components/Home/AboutUs";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Location from "@/components/Home/Location";
import { Newsletter } from "@/components/Home/Newsletter";
import ShopImages from "@/components/Home/ShopImages";
import Testimonials from "@/components/Home/Testimonials";
import WhatWeSell from "@/components/Home/WhatWeSell";
import WinterSpecials from "@/components/Home/Winter";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WinterSpecials />
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
