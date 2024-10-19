import { FaSnowflake, FaMugHot } from "react-icons/fa";
import Image from "next/image";

const WinterSpecials = () => {
  const winterItems = [
    {
      id: 1,
      name: "Peppermint Mocha",
      image: "/images/peppermint-mocha.jpg",
      description:
        "A rich blend of chocolate and espresso with a hint of peppermint, topped with whipped cream. Perfect for warming up on a cold day.",
    },
    {
      id: 2,
      name: "Gingerbread Latte",
      image: "/images/gingerbread-latte.jpg",
      description:
        "Enjoy the flavors of gingerbread in a latte. Warm spices combined with espresso and steamed milk for a seasonal delight.",
    },
    {
      id: 3,
      name: "Hot Chocolate",
      image: "/images/hot-chocolate.jpg",
      description:
        "Classic hot chocolate topped with marshmallows, perfect for a cozy evening at the cafe.",
    },
  ];

  return (
    <section className="py-12 bg-light-blue text-center relative overflow-hidden">
      {/* Decorative Snowflakes */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none opacity-20">
        <FaSnowflake size={120} className="text-white absolute top-8 left-4" />
        <FaSnowflake
          size={90}
          className="text-white absolute top-24 right-12"
        />
        <FaSnowflake
          size={100}
          className="text-white absolute bottom-10 left-16"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-dark-brown mb-6">
          Winter Specials
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Warm up this winter with our seasonal drinks and treats. Only
          available for a limited time!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {winterItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl flex items-center flex-col transition-shadow relative"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>

              {/* Decorative Coffee Mug Icon */}
              <div className="absolute top-2 right-2 text-primary text-2xl">
                <FaMugHot />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-accent-secondary transition-colors">
            Explore Our Winter Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default WinterSpecials;
