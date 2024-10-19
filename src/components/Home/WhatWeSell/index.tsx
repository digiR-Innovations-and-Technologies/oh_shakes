import Image from "next/image";

// Cafe Item
const Items = [
  {
    image: "/images/cappuccino.jpg", // Replace with actual image paths
    name: "Cappuccino",
    description:
      "A rich and creamy coffee made with espresso and steamed milk, topped with frothy milk foam.",
  },
  {
    image: "/images/latte.jpg",
    name: "Latte",
    description:
      "Smooth espresso blended with steamed milk and topped with a light layer of milk foam.",
  },
  {
    image: "/images/espresso.jpg",
    name: "Espresso",
    description:
      "A concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
  },
  {
    image: "/images/americano.jpg",
    name: "Americano",
    description:
      "Espresso diluted with hot water, giving it a similar strength to brewed coffee.",
  },
  {
    image: "/images/vanilla-shake.jpg",
    name: "Vanilla Shake",
    description:
      "A creamy blend of vanilla ice cream and milk, topped with whipped cream.",
  },
  {
    image: "/images/chocolate-shake.jpg",
    name: "Chocolate Shake",
    description:
      "Indulge in our thick chocolate shake, made with rich chocolate ice cream and milk.",
  },
];

const WhatWeSell = () => {
  return (
    <div className="px-4 py-12 flex items-center justify-center relative">
      <div className="max-w-screen-xl mx-auto relative z-0">
        <div className="flex items-center gap-4 md:w-1/2 mx-auto">
          <div className="h-[2px] bg-dark-brown flex-1"></div>
          <h1 className="text-4xl text-dark-brown font-bold">What We Sell</h1>
          <div className="h-[2px] bg-dark-brown flex-1"></div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-y-8 mt-8">
          {Items.map((item, index) => (
            <div
              key={index}
              className="flex md:odd:flex-col odd:flex-row-reverse md:flex-col items-center gap-4 py-6 px-4 md:text-center"
            >
              <Image
                src="/images/hero.jpg"
                alt={item.name}
                width={200}
                height={200}
                className="w-40 h-40 object-cover border-2 border-primary rounded-full"
              />
              <div className="">
                <h1 className="text-2xl leading-tight">{item.name}</h1>
                <p className="text-md leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeSell;
