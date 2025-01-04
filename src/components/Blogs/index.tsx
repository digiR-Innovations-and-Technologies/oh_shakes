"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { blogsData } from "../data";

const Blogs = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-dark-brown mb-4">Our Blogs</h1>
        <p className="text-lg text-gray-600">
          Dive into the world of Oh Shakes! Discover stories, recipes, and tips
          about shakes, desserts, and cafe culture.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Blog Image */}
            <div className="relative w-full bg-gray-100 p-4 aspect-square">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="rounded-t-lg"
              />
            </div>

            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-dark-brown mb-2">
                {blog.title}
              </h2>

              <button
                onClick={() => router.push(`/blogs/${blog.id}`)}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
