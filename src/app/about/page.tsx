"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaCoffee, FaHeart, FaShieldAlt, FaStar } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { IoIosIceCream } from "react-icons/io";
import Image from "next/image";

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-primary rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1 bg-gradient-to-br from-white to-primary/5"
    >
      <div className="flex items-center mb-4">
        <div className="text-primary text-3xl mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

// Story Section Component
const StorySection = ({
  title,
  content,
  isAlternate = false,
}: {
  title: string;
  content: string;
  isAlternate?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isAlternate ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`border-${isAlternate ? "r" : "l"}-4 border-primary p-6 mb-8`}
    >
      <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="max-w-screen-xl mx-auto p-6 space-y-12">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 py-12"
        >
          <h1 className="text-5xl font-bold text-primary">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            From a humble beginning to becoming Bikaner&apos;s favorite shake destination - 
            discover the journey of Oh Shakes and our commitment to quality and taste.
          </p>
        </motion.header>

        {/* Brand Video/Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-[900px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image 
            src="/cafe-about.jpeg" 
            alt="Oh Shakes Cafe" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
            <div className="text-center text-white p-6 bg-black/20 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-2">Oh Shakes</h2>
              <p className="text-lg">In the heart of Bikaner</p>
            </div>
          </div>
        </motion.div>

        {/* Our Journey Timeline */}
        <section className="py-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-[2px] bg-primary flex-1"></div>
            <h2 className="text-3xl font-bold text-primary text-center">Our Journey</h2>
            <div className="h-[2px] bg-primary flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StorySection 
              title="The Beginning" 
              content="Oh Shakes began with a simple idea: to create a haven where people could relax, enjoy delightful shakes, and share beautiful moments. The founders recognized that in the hustle and bustle of modern life, people needed a place where they could escape, unwind, and indulge in the simple pleasures of life."
            />
            <StorySection 
              title="The Founders" 
              content="Inspired by their love for beverages, our founders spent months experimenting with recipes to perfect the shakes. They were driven by a deep passion for bringing people together through food and drinks that could be enjoyed by everyone. Over time, they began to perfect their craft, testing different combinations of ingredients and textures."
              isAlternate={true}
            />
            <StorySection 
              title="Growth" 
              content="As Oh Shakes continued to gain traction, the founders began to realize the potential for growth. What was once a small, cozy cafe had become a popular gathering place for locals. This success led the founders to expand their offerings, introducing new menu items to complement their signature shakes."
            />
            <StorySection 
              title="Today" 
              content="Today, Oh Shakes is a bustling space with cozy interiors, cheerful staff, and a menu that caters to everyone. With over 60 flavors of thick shakes and specialty coffee directly sourced from South Indian farmers, we've become a beloved destination for people of all ages in the heart of Bikaner."
              isAlternate={true}
            />
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-3">What Makes Us Unique</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              At Oh Shakes, we pride ourselves on offering exceptional quality and unique experiences
              that set us apart from the ordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaLeaf />}
              title="Gluten-Free Options"
              description="We cater to all dietary needs with our range of gluten-free products, ensuring everyone can enjoy our delicious offerings."
            />
            <FeatureCard 
              icon={<GiMilkCarton />}
              title="100% Milk-Based Products"
              description="All our shakes and coffee are made with 100% milk, providing rich, creamy taste and wholesome goodness."
            />
            <FeatureCard 
              icon={<IoIosIceCream />}
              title="Homemade Ice Cream"
              description="We make our ice cream in-house with no vegetable oil, resulting in a purer, more authentic taste experience."
            />
            <FeatureCard 
              icon={<FaHeart />}
              title="Probiotic Thick Shakes"
              description="First in Rajasthan! Our probiotic thick shakes and coffee are not just delicious but good for your gut health too."
            />
            <FeatureCard 
              icon={<FaCoffee />}
              title="Single Origin Coffee"
              description="Our coffee is specially sourced directly from South Indian farmers, ensuring the finest quality and supporting local agriculture."
            />
            <FeatureCard 
              icon={<FaStar />}
              title="60+ Unique Flavors"
              description="With over 60 delicious flavors to choose from, there's always something new to discover at Oh Shakes."
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="bg-primary/10 p-4 md:p-6 rounded-lg max-w-2xl text-center">
              <p className="text-primary font-medium text-lg">
                &quot;Our commitment to quality isn&apos;t just a promise — it&apos;s in every sip of our shakes and every bite of our desserts.&quot;
              </p>
            </div>
          </motion.div>
        </section>

        {/* Flavor Variety */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border border-primary rounded-lg p-8 bg-gradient-to-r from-white to-primary/10"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Over 60 Flavors to Choose From</h2>
            <p className="text-lg mt-2">Discover your perfect shake from our extensive menu</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Roasted Hazelnut", color: "bg-amber-100" },
              { name: "Strawberry Bliss", color: "bg-red-100" },
              { name: "Kaju Mango", color: "bg-yellow-100" },
              { name: "Blueberry Trip", color: "bg-indigo-100" },
              { name: "Royal Vanilla", color: "bg-stone-200" },
              { name: "Cold Coffee", color: "bg-amber-500" },
              { name: "Crunchy Butterscotch", color: "bg-amber-300" },
              { name: "Choco-Oreo", color: "bg-slate-200" }
            ].map((flavor, index) => (
              <motion.div 
                key={index} 
                className={`text-center p-4 ${flavor.color} rounded-lg shadow-sm hover:shadow-md transition-all`}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-medium">{flavor.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-primary font-semibold">...and many more to explore at our cafe!</p>
          </div>
        </motion.section>

        {/* Quality Promise */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 py-8"
        >
          <div className="md:w-1/2">
            <FaShieldAlt className="text-primary text-6xl mb-4 mx-auto md:mx-0" />
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center md:text-left">Our Quality Promise</h2>
            <p className="text-gray-700 leading-relaxed">
              At Oh Shakes, quality is non-negotiable. From sourcing the freshest ingredients to carefully crafting each shake and coffee, we ensure that every sip delivers pure satisfaction. We believe in transparency and authenticity, which is why we make our ice cream in-house and source our coffee directly from farmers. Our commitment to excellence extends beyond taste to include health consciousness, which is why we avoid vegetable oils and offer probiotic options.
            </p>
          </div>
          <div className="md:w-1/2 border-l-0 md:border-l-4 border-primary pl-0 md:pl-8">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center md:text-left">We Never Compromise On:</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>Quality of ingredients</li>
              <li>Authentic taste and texture</li>
              <li>Health benefits of our products</li>
              <li>Customer satisfaction</li>
              <li>Innovation and variety</li>
              <li>Hygiene and cleanliness</li>
            </ul>
          </div>
        </motion.section>

        {/* Community Impact */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border border-primary rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Community Impact</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Oh Shakes, we believe in giving back to the community that has embraced us. We source our ingredients locally whenever possible, support local farmers, and create employment opportunities. By choosing Oh Shakes, you&apos;re not just enjoying a delicious treat - you&apos;re contributing to the local economy and helping us make a positive difference.
          </p>
          <div className="text-center">
            <q className="text-lg italic text-primary">
              Creating delightful experiences, one shake at a time
            </q>
          </div>
        </motion.section>

        {/* Visit Us CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Come Visit Us Today</h2>
          <p className="text-lg mb-8">
            Experience the Oh Shakes difference at our cafe in the heart of Bikaner
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-accent transition-colors inline-block"
            >
              Find Us
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}