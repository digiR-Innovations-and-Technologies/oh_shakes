import Image from "next/image";
import { caveat } from "@/app/layout";
import CustomSlider from "@/components/CustomSlider";
import HeroImage from "../../../../public/images/hero.jpg";

const slidesData = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide.",
    image: HeroImage,
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide.",
    image: HeroImage,
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide.",
    image: HeroImage,
  },
];

// const Slide = ({ slide }: { slide: (typeof slidesData)[0] }) => {
//   return (
//     <div className="h-full flex flex-col justify-center items-center gap-8 px-4">
//       <h1 className={`${caveat.className} text-5xl text-white`}>
//         {slide.title}
//       </h1>
//       <p className="text-white text-lg">{slide.description}</p>
//     </div>
//   );
// };

const Hero = () => {
  return (
    <div className="h-screen md:bg-cover bg-no-repeat w-full relative px-6">
      {/* Dark Overlay */}
      {/* Content */}
      <CustomSlider>
        {slidesData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`w-full h-screen flex flex-col justify-center items-center gap-8 px-4]`}
          >
            <h1 className={`${caveat.className} text-5xl text-white`}>
              {item.title}
            </h1>
            <p className="text-white text-lg">{item.description}</p>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default Hero;
