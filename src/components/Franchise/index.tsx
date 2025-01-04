import React from "react";

const Franchise = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="max-w-screen-xl mx-auto p-6 space-y-12">
        {/* Header Section */}
        <header className="border border-primary rounded-lg p-6 text-center">
          <h1 className="text-4xl font-bold text-primary">
            Own a Franchise with Oh Shakes
          </h1>
          <p className="mt-4 text-lg">
            Are you ready to embark on a fulfilling entrepreneurial journey with
            a brand that values quality, authenticity, and community impact? At
            Oh Shakes, we pride ourselves on delivering excellence through our
            self-manufactured products and unique recipes that have won hearts
            across Rajasthan.
          </p>
        </header>

        {/* Our Journey */}
        <section className="border-l-4 border-primary p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Journey
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Research Began:</strong> March 2020, during the COVID
              period, marked the beginning of our journey. We dedicated
              ourselves to intensive research to develop innovative products and
              recipes that stand out in the market.
            </p>
            <p>
              <strong>Operations Started:</strong> By June 2022, we transformed
              our vision into reality, launching operations with a focus on
              delivering unmatched quality.
            </p>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="border-t-4 border-primary p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            What Makes Us Unique?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Self-Manufactured Products crafted in-house for authenticity.
              </li>
              <li>Certified Quality Assurance for top-notch standards.</li>
              <li>Unique Flavors loved on social media platforms.</li>
              <li>100% milk-based thick shakes.</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>No palm oil used in any products.</li>
              <li>60+ exciting flavors to choose from.</li>
              <li>Specially roasted coffee beans for a unique taste.</li>
              <li>Balanced sugar levels across all menu items.</li>
            </ul>
          </div>
        </section>

        {/* Franchise Opportunities */}
        <section className="border border-primary rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Franchise Opportunities
          </h2>
          <p className="mb-4">
            By partnering with Oh Shakes, you join a family committed to
            excellence and growth. Here&apos;s why this opportunity is unique:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strategic locations near high-footfall areas.</li>
            <li>
              Comprehensive support in training, marketing, and operations.
            </li>
            <li>Access to exclusive recipes and in-house products.</li>
            <li>Established brand loyalty and recognition.</li>
            <li>A proven low-risk, high-reward business model.</li>
          </ul>
        </section>

        {/* Owner's Story */}
        <section className="border-r-4 border-primary p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Owner’s Story
          </h2>
          <p>
            The foundation of Oh Shakes lies in the inspiring journey of our
            founder, Himensh Jhamb. Driven by a passion for cooking and a vision
            for excellence, Himensh transformed his family’s combined creativity
            into a thriving brand. Together, they ensure every product delivers
            unmatched quality and taste.
          </p>
        </section>

        {/* Application Section */}
        <section className="border border-primary rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Become a Franchise Partner
          </h2>
          <p>
            Take the first step to owning a successful franchise. Fill out the
            required documents and click the button below to apply!
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Valid ID Proof (e.g., Aadhaar Card, PAN Card)</li>
            <li>Address Proof</li>
            <li>Financial Proof (Bank Statements, Income Proof)</li>
            <li>Relevant Certifications (if any)</li>
          </ul>
        </section>

        <section>
          <h1 className="text-primary mb-4 text-3xl font-bold">
            Fill This Application Form
          </h1>
          <div className=" md:p-6 p-4 rounded-lg shadow-sm border">
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="driveLink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Google Drive Link for All Documents
                </label>
                <input
                  id="driveLink"
                  type="url"
                  placeholder="Paste the Google Drive link here"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Office Address
                </label>
                <textarea
                  id="address"
                  placeholder="Write your address here..."
                  rows={4}
                  className="w-full px-3 resize-none py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="mt-8">
                  <button className="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-accent-secondary transition-colors">
                    Send Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* FAQs */}
        <section className="border border-primary rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">FAQs</h2>
          <div className="space-y-4">
            <p>
              <strong>
                1. What are the initial costs to start a franchise?
              </strong>{" "}
              Between 15L-20L
            </p>
            <p>
              <strong>2. Will training be provided?</strong> Yes, we offer
              comprehensive training to all franchisees.
            </p>
            <p>
              <strong>3. Can I choose my location?</strong> Yes, but it will be
              evaluated by the brand side.
            </p>
            <p>
              <strong>
                4. How soon can I expect returns on my investment?
              </strong>{" "}
              12-18 months
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Franchise;
