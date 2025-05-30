import Image from "next/image";

const ShopImages = () => {
  return (
    <div className="px-4 py-12">
      <div className="max-w-screen-xl grid md:grid-cols-2 grid-cols-2 gap-4 mx-auto">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center aspect-square overflow-hidden"
            >
              <Image
                src={`/images/shop${index + 1}.jpeg`}
                alt={`Shop ${index + 1}`}
                width={500}
                loading="eager"
                rel="preload"
                height={500}
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopImages;
