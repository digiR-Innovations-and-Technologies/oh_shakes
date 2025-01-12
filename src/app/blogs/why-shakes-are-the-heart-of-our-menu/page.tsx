import Image from "next/image";
import React from "react";

export default function WhyShakesAreTheHeart() {
  const data = {
    id: 2,
    image: "/images/shop2.jpeg",
    title: "Why Shakes Are the Heart of Our Menu",
    content: [
      {
        title: "Shakes as a Way of Life",
        paragraph:
          "Shakes are more than just a drink at Oh Shakes; they are a way of life. Crafted with precision and love, every shake reflects our passion for flavor and quality. For the founders, shakes were never just about satisfying thirst – they were about creating an experience. Each shake is carefully crafted to deliver a unique flavor profile that excites the senses and provides a moment of indulgence. Whether it's the rich, creamy texture or the perfect balance of sweetness, every element is designed to create an unforgettable experience. Shakes have become a symbol of the brand’s commitment to quality and its mission to bring joy to people’s lives. At Oh Shakes, shakes aren’t just a menu item; they are a way of life, a way to connect with others, and a way to savor the little moments that make life special.",
      },
      {
        title: "Quality Ingredients",
        paragraph:
          "We use the finest chocolates, fresh fruits, and dairy products in all our shakes. Quality ingredients are the foundation of every shake at Oh Shakes. From the very beginning, the founders knew that to create something exceptional, they had to start with the best possible ingredients. This commitment to quality is reflected in every sip of their shakes. The chocolate is rich and smooth, the fruits are picked at the peak of ripeness, and the dairy is sourced from local farms to ensure freshness and flavor. The use of high-quality ingredients not only enhances the taste but also ensures that every shake is as nutritious as it is delicious. By choosing the finest ingredients, Oh Shakes delivers a product that stands out from the competition and exceeds the expectations of customers.",
      },
      {
        title: "Unique Recipes",
        paragraph:
          "Signature combinations like 'Caramel Explosion' and 'Berry Bliss' set our menu apart. Oh Shakes is known for its innovative and creative recipes that combine classic flavors with new, exciting twists. Signature shakes like ‘Caramel Explosion’ and ‘Berry Bliss’ are a hit among customers, and for good reason. The combination of flavors in these shakes is nothing short of extraordinary. The ‘Caramel Explosion’ combines the rich, buttery sweetness of caramel with the perfect blend of vanilla and chocolate, while the ‘Berry Bliss’ is a refreshing mix of strawberries, blueberries, and a hint of mint. These signature recipes are just a few examples of how Oh Shakes continuously pushes the boundaries of flavor, offering customers new and exciting options every time they visit.",
      },
      {
        title: "Sustainability",
        paragraph:
          "We support local farmers and ensure ethical sourcing of vanilla and chocolate. Sustainability is a core value at Oh Shakes. From the beginning, the founders have been committed to making choices that not only benefit their customers but also the planet. By supporting local farmers and ensuring ethical sourcing of ingredients like vanilla and chocolate, Oh Shakes is doing its part to reduce its environmental impact and promote sustainability in the food industry. Ethical sourcing means that the ingredients used are grown and harvested in a way that respects the environment and the people who produce them. This approach not only helps protect the planet but also ensures that the products used in Oh Shakes' menu are of the highest quality.",
      },
      {
        title: "Customer Favorites",
        paragraph:
          "Our signature creations have won the hearts of thousands. Many customers share how these shakes remind them of childhood memories or help them create new ones. At Oh Shakes, the goal is to create more than just a great drink – it’s about creating memories. Many customers return to Oh Shakes because their signature shakes evoke nostalgia, reminding them of simpler times or special occasions. Whether it's a shake enjoyed with friends on a summer afternoon or a celebratory treat after a big achievement, Oh Shakes has become a place where people create and relive cherished moments. This emotional connection with the shakes is what has made them customer favorites and continues to keep people coming back for more.",
      },
      {
        title: "Seasonal Specials",
        paragraph:
          "From summer mango shakes to winter cinnamon delights, we keep our menu fresh with seasonal specials. Seasonal specials have become a hallmark of the Oh Shakes experience, offering customers new and exciting flavors to enjoy throughout the year. The cafe takes full advantage of seasonal fruits, spices, and flavors, creating shakes that reflect the changing seasons. In the summer, customers can enjoy refreshing mango shakes, while in the winter, they can indulge in the warm, comforting flavors of cinnamon and nutmeg. These seasonal specials not only keep the menu exciting but also allow Oh Shakes to showcase the best ingredients that each season has to offer.",
      },
      {
        title: "Celebrations",
        paragraph:
          "Whether you're celebrating a special occasion or just need a mid-day pick-me-up, our shakes are designed to add a little happiness to your day. Shakes at Oh Shakes aren’t just for quenching thirst – they are a way to celebrate life’s moments. Whether it’s a birthday, a promotion, or simply a celebration of getting through the week, Oh Shakes provides the perfect treat. The shakes are not just delicious but are designed to bring a little joy to your day. With every sip, you’re reminded that life is worth celebrating, no matter how big or small the occasion. Oh Shakes has become a place where people come together to celebrate and make lasting memories.",
      },
      {
        title: "The Experience",
        paragraph:
          "Each shake is crafted with passion and precision, offering a unique experience with every sip. At Oh Shakes, every shake is a carefully crafted work of art. The founders believe that every customer deserves the best experience possible, and that starts with crafting shakes that are both delicious and unique. From the moment you take your first sip, you can taste the passion and precision that goes into every creation. Each shake is a celebration of flavor, and each ingredient is chosen with care to ensure that the result is a perfectly balanced, indulgent treat. The experience of drinking an Oh Shakes shake is about more than just the taste – it’s about savoring the moment and enjoying the artistry behind the drink.",
      },
      {
        title: "The Future",
        paragraph:
          "Our commitment to creating memorable shakes continues as we explore new flavors and recipes to delight our customers. As Oh Shakes continues to grow, the founders are committed to maintaining the core values that have made the brand so successful. This includes their commitment to quality, innovation, and sustainability. In the future, Oh Shakes plans to introduce even more exciting flavors and seasonal specials that will keep customers coming back for more. The brand is also looking at new ways to expand and reach new audiences, while continuing to foster a strong connection with the community. The future of Oh Shakes is full of possibilities, and the founders are excited to continue their journey of creating memorable experiences for their customers.",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div>
        <div className="relative mx-auto mb-6 p-4 aspect-square h-24 w-24">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="rounded-t-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-primary-700 mb-6 text-center">
          {data.title}
        </h1>
        {data.content.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{section.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
