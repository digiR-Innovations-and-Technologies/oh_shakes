import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-12 px-4 bg-light-brown">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <Image
            src="/images/cafe-about.jpg"
            alt="Cafe Interior"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-dark-brown">Our Story</h2>
          <p className="mt-4 text-lg leading-relaxed">
            At CoffeePlace, we believe in crafting the perfect cup for each
            customer. Our journey started 10 years ago, and since then, we’ve
            been passionate about serving the finest coffee in a cozy, welcoming
            environment. Join us for a unique experience that blends tradition
            with modern flavors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
