"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { blogsData } from "@/components/data";

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = blogsData.find((b) => b.id === parseInt(id));
  const router = useRouter();

  if (!blog) {
    return (
      <div className="container mx-auto text-center py-12">
        <h1 className="text-4xl font-semibold text-dark-brown mb-4">
          Blog Not Found
        </h1>
        <button
          onClick={() => router.push("/blogs")}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition duration-200"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center w-full">
        <div className="h-40 aspect-square relative mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="rounded-xl w-full h-full object-cover  "
          />
        </div>
        <h1 className="text-4xl font-extrabold text-dark-brown text-center mb-6">
          {blog.title}
        </h1>
        <div className="space-y-6 w-full text-gray-800 text-lg">
          {blog.content.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="text-3xl text-primary">{item.title}</h1>
              <p key={index} className="leading-relaxed">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
