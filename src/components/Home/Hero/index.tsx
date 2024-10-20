import Image from "next/image";
import CustomSlider from "@/components/CustomSlider";
import slide1 from "../../../../public/images/slide1.jpg";
import slide2 from "../../../../public/images/slide2.jpg";
import slide3 from "../../../../public/images/slide3.jpg";

const slidesData = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide.",
    image: slide1,
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide.",
    image: slide2,
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide.",
    image: slide3,
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
    <CustomSlider>
      {slidesData.map((item, index) => (
        <div key={index}>
          <div
            key={index}
            className={`w-full lg:h-screen h-[40vh] flex flex-col border-dark-brown relative justify-center items-center gap-4 px-4]`}
          >
            <Image
              src={item.image}
              alt="hero"
              fill={true}
              className="h-full w-full absolute object-cover top-0 left-0 bottom-0 -z-10 right-0 "
            />
            {/* <h1 className={`${caveat.className} text-5xl text-primary`}>
              {item.title}
            </h1>
            <p className="text-white text-lg">{item.description}</p> */}
          </div>
        </div>
      ))}
    </CustomSlider>
  );
};

export default Hero;
