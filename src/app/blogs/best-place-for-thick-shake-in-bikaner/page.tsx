import Image from "next/image";
import React from "react";

export default function OhShakesBlog() {
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
        <h1 className="text-4xl font-bold text-primary-700 mb-6 text-center">
          BEST PLACE FOR THICK SHAKE IN BIKANER
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          When it comes to finding the creamiest and most flavorful thick shakes
          in Bikaner, <strong>Oh Shakes</strong> stands out as the ultimate
          destination. Conveniently located near Bikaner Railway Station, Oh
          Shakes has earned a reputation for serving a wide variety of premium
          shakes that are perfect for satisfying your sweet cravings.
        </p>

        <h2 className="text-2xl font-semibold text-primary-800 mb-4">
          Why Choose Oh Shakes?
        </h2>
        <ul className="list-decimal list-inside text-gray-700 mb-8 space-y-3">
          <li>
            <strong className="text-primary-800">
              100% Milk-Based Shakes:
            </strong>{" "}
            Every shake is made with pure milk, ensuring unmatched taste and
            quality.
          </li>
          <li>
            <strong className="text-primary-800">No Ice Cream Mixing:</strong>{" "}
            Unlike others, Oh Shakes keeps it authentic with no ice cream
            mixing, offering true thick shakes.
          </li>
          <li>
            <strong className="text-primary-800">
              True Thick Shake Experience:
            </strong>{" "}
            Indulge in shakes that are genuinely thick, creamy, and satisfying.
          </li>
          <li>
            <strong className="text-primary-800">Perfect Location:</strong> Just
            100 meters from Bikaner Railway Station, it’s easily accessible for
            travelers and locals alike.
          </li>
          <li>
            <strong className="text-primary-800">Vibrant Ambiance:</strong> The
            cheerful decor and friendly staff make it an ideal spot to relax and
            refresh.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-800 mb-4">
          Must-Try Shakes at Oh Shakes
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>
            <strong className="text-primary-800">Kaju Anjeer:</strong> A
            luxurious blend of cashews and figs for a rich and nutty experience.
          </li>
          <li>
            <strong className="text-primary-800">Rajwadi Rajbhod:</strong> A
            royal treat with a burst of traditional flavors.
          </li>
          <li>
            <strong className="text-primary-800">Gulkand Shake:</strong> Infused
            with the sweetness of rose petals for a refreshing twist.
          </li>
          <li>
            <strong className="text-primary-800">Hazelnut Frappe:</strong> A
            nutty, creamy delight that’s perfect for coffee lovers.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-800 mb-4">
          Snacks to Complement Your Shake
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Oh Shakes doesn’t just stop at amazing shakes. Their menu also
          features a range of delicious snacks like cheesy fries, sandwiches,
          and burgers to elevate your dining experience.
        </p>

        <div className="bg-primary-100 p-4 rounded">
          <h3 className="text-xl font-bold text-primary-800 mb-4 text-center">
            Visit Oh Shakes Today!
          </h3>
          <p className="text-gray-700 text-center">
            Whether you’re a Bikaner local or just passing through, Oh Shakes is
            a must-visit spot for thick shake lovers. Don’t miss the chance to
            indulge in the best shakes in town and make your taste buds dance
            with joy!
          </p>
        </div>
      </div>
    </div>
  );
}
