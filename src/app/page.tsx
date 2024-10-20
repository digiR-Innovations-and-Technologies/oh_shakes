import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import Location from "@/components/Home/Location";
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
      <Testimonials />
      <Location />
    </div>
  );
};

export default Home;
