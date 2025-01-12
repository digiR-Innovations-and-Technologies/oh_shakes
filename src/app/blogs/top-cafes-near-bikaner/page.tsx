import Image from "next/image";
import React from "react";

export default function BlogComponent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className=" ">
        <div className="relative mx-auto mb-6 p-4 aspect-square h-24 w-24">
          <Image
            src={"/images/logo.png"}
            alt={"Oh Shakes blog"}
            fill
            className="rounded-t-lg"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Top Cafes and Eateries Near Bikaner Railway Station: A Blend of Taste
          and Ambiance
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Bikaner, known for its rich heritage and delectable cuisine, also
          offers a variety of eateries and cafes near its railway station.
          Whether you’re a traveler passing through or a local exploring the
          area, these spots provide a mix of delightful flavors and cozy
          atmospheres. Here’s a curated list of the top places within 1 km of
          Bikaner Railway Station:
        </p>

        {/* Oh Shakes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">1. Oh Shakes</h2>
          <p className="text-gray-500 text-sm mb-2">
            Distance from Station: ~100 meters
          </p>
          <p className="text-gray-600 mb-2">
            Oh Shakes is a must-visit for those who love thick shakes and quick
            bites. Known for its creamy, flavorful shakes, this cafe also offers
            a variety of snacks to complement your drink. Whether you’re in the
            mood for a classic chocolate shake or something fruity, Oh Shakes
            has you covered. The vibrant decor and friendly service make it a
            favorite among locals and travelers alike.
          </p>
          <p className="text-gray-800 font-medium">Must-Try:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Kaju Anjeer Shake</li>
            <li>Oreo Shake</li>
            <li>Paneer Grilled Sandwich</li>
            <li>Cheese Maggie</li>
          </ul>
        </section>

        {/* Bikaner Namkeen Bhandar */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            2. Bikaner Namkeen Bhandar
          </h2>
          <p className="text-gray-500 text-sm mb-2">
            Distance from Station: ~700 meters
          </p>
          <p className="text-gray-600 mb-2">
            For a true taste of Bikaner’s traditional flavors, Bikaner Namkeen
            Bhandar is the place to be. This shop specializes in a wide variety
            of namkeens and sweets, showcasing the city’s rich culinary
            heritage. Perfect for grabbing some snacks for your journey or as
            souvenirs for loved ones.
          </p>
          <p className="text-gray-800 font-medium">Must-Try:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Bhujia</li>
            <li>Rasgulla</li>
            <li>Ghevar</li>
          </ul>
        </section>

        {/* Ganesh Hotel */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            3. Ganesh Hotel
          </h2>
          <p className="text-gray-500 text-sm mb-2">
            Distance from Station: ~200 meters
          </p>
          <p className="text-gray-600 mb-2">
            Ganesh Hotel is more of a restaurant than a cafe, offering a
            wholesome main course menu. Known for its traditional Rajasthani
            dishes and hearty meals, this spot is ideal for those looking to
            enjoy a proper meal in a comfortable setting.
          </p>
          <p className="text-gray-800 font-medium">Must-Try:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Dal Makhani</li>
            <li>Gatte Ki Sabzi</li>
            <li>Paneer Butter Masala</li>
          </ul>
        </section>

        {/* Dwarika */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">4. Dwarika</h2>
          <p className="text-gray-500 text-sm mb-2">
            Distance from Station: ~1 km
          </p>
          <p className="text-gray-600 mb-2">
            Dwarika offers the best of both worlds – a main course menu and an
            in-house bakery. This versatile spot is perfect for enjoying a full
            meal or indulging in freshly baked goods. The elegant interiors and
            warm ambiance make it a great place for family outings or casual
            meet-ups.
          </p>
          <p className="text-gray-800 font-medium">Must-Try:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Paneer Tikka Masala</li>
            <li>Fresh Bread Rolls</li>
            <li>Pineapple Pastry</li>
          </ul>
        </section>

        {/* Chotu Motu Joshi */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            5. Chotu Motu Joshi
          </h2>
          <p className="text-gray-500 text-sm mb-2">
            Distance from Station: ~800 meters
          </p>
          <p className="text-gray-600 mb-2">
            Chotu Motu Joshi is a legendary spot in Bikaner, famous for its
            traditional namkeens and puri sabji. This eatery has been a favorite
            among locals for decades, offering authentic flavors that truly
            represent the city’s culinary charm.
          </p>
          <p className="text-gray-800 font-medium">Must-Try:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Puri Sabji</li>
            <li>Samosa</li>
            <li>Kachori</li>
          </ul>
        </section>

        <p className="text-gray-600 mt-8">
          The cafes and eateries near Bikaner Railway Station offer a delightful
          mix of traditional and modern flavors. From thick shakes at Oh Shakes
          to the authentic Rajasthani dishes at Ganesh Hotel, there’s something
          for everyone within a short distance of the station. If you’re passing
          through Bikaner, don’t miss the chance to explore these culinary gems!
        </p>
      </div>
    </div>
  );
}
