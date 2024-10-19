import Image from "next/image";
import { caveat } from "@/app/layout";

const Hero = () => {
  return (
    <div className="md:bg-[url('/images/hero.jpg')] h-screen md:bg-cover bg-no-repeat w-full relative">
      {/* Dark Overlay */}
      <div className="bg-dark-brown/60 absolute top-0 left-0 bottom-0 right-0 z-10"></div>

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        className="h-full w-full absolute md:object-fill object-cover z-0"
        height={1200}
        width={1200}
        alt="hero-image"
      />

      {/* Content */}
      <div className="flex items-center h-full w-full px-4 relative z-20 md:py-12 py-6 justify-center flex-col">
        {/* Main Heading */}
        <h1 className="md:text-7xl text-5xl text-center text-accent font-extrabold leading-tight text-orange-500">
          Shake Up Your Taste Buds!
        </h1>

        {/* Subheading */}
        <p className="text-light md:text-2xl text-xl italic md:w-1/2 text-center mt-4 leading-relaxed text-white">
          Experience the most irresistible shakes that will make you say wow!
          Made with the finest ingredients and blended to perfection.
        </p>

        {/* Additional Text */}
        <h3 className="text-accent-secondary text-2xl md:w-1/2 text-center leading-relaxed mt-2 text-yellow-300">
          Refreshing flavors, creamy textures, and a whole lot of deliciousness
          in every sip.
        </h3>

        {/* Call to Action Button */}
        <button
          className={`bg-orange-500 ${caveat.className} hover:bg-yellow-500 hover:text-dark-brown transition-all rounded-full border-yellow-500 border-2 text-xl font-bold text-white py-3 px-6 mt-6 shadow-lg`}
        >
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default Hero;
