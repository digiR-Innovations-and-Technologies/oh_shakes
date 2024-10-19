import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import InstagramPostEmbed from "@/components/Home/InstagramPostEmbed";
import Location from "@/components/Home/Location";
import Testimonials from "@/components/Home/Testimonials";
import WhatWeSell from "@/components/Home/WhatWeSell";
import WinterSpecials from "@/components/Home/Winter";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WinterSpecials />
      <WhatWeSell />
      <Testimonials />
      <Location />
      <InstagramPostEmbed url="https://www.instagram.com/oh.shakes" />
    </div>
  );
};

export default Home;
