import React from "react";
import Image from "next/image";
import { getAllBlogs } from "@/lib/helpers";
import BlogItem from "./Blogitem";
// import Blogitem from "./Blogitem";

const blogs = [
  {
    id: "7567",
    title: "next is aweasome",
    desc: "<p>hello, lorem hfhfhhf hhfhfhfh  jjfkc fi<p>",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    createdAt: "2023-4-8T16:39:25.055Z",
    categoryId: "4655464",
    location: "nigeria",
  },
  {
    id: "7577",
    title: "next is aweasome",
    desc: "<p>hello, lorem hfhfhhf hhfhfhfh  jjfkc fi<p>",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    createdAt: "2023-4-8T16:39:25.055Z",
    categoryId: "464964",
    location: "nigeria",
  },
  {
    id: "797",
    title: "next is aweasome",
    desc: "<p>hello, lorem hfhfhhf hhfhfhfh  jjfkc fi<p>",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    createdAt: "2023-4-8T16:39:25.055Z",
    categoryId: "40464",
    location: "nigeria",
  },
  {
    id: "787",
    title: "next is aweasome",
    desc: "<p>hello, lorem hfhfhhf hhfhfhfh  jjfkc fi<p>",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    createdAt: "2023-4-8T16:39:25.055Z",
    categoryId: "46764",
    location: "nigeria",
  },
  {
    id: "157",
    title: "next is aweasome",
    desc: "<p>hello, lorem hfhfhhf hhfhfhfh  jjfkc fi<p>",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    createdAt: "2023-4-8T16:39:25.055Z",
    categoryId: "4464",
    location: "nigeria",
  },
  {
    id: "737",
    title: "next is aweasome",
    desc: "<p>hello, lorem hfhfhhf hhfhfhfh  jjfkc fi<p>",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    createdAt: "2023-4-8T16:39:25.055Z",
    categoryId: "45464",
    location: "nigeria",
  },
];
const Homesection = async () => {
  // const blogs= await getAllBlogs(6);

  return (
    <section className="w-full my-4">
      <div className="w-full flex xs:flex-col md:flex-row justify-center items-center">
        <div className="p-8 w-3/4 flex flex-col gap-3">
          <p className="tracking-wide lg:text-6xl md:text-2xl font-semibold md:w-2/4 xs:4/4 text-start text-gray-700">
            Learn form the best, and become the best.
          </p>
          <p className="tracking my-2 md:text-2xl xs:text-md font-semibold md:w-3/4 xs:w-full text-start text-gray-900">
            Learn it by doing it for FREE with practical step by step Series and
            Articles
          </p>
        </div>

        <div className="md:w-2/4 xs:w-3/4 md:mx-2 xs:my-2">
          <Image
            src={"https://images.unsplash.com/photo-1522071820081-009f0129c71c"}
            alt="carouselImage"
            width={300}
            height={200}
            className="w-full rounded-2xl drop-shadow-2xl"
          />
        </div>
      </div>
      <hr className="p-3 my-4" />
      <div className="flex flex-col justify-center items-center">
        <div className="p-4">
          <h2 className="text-2xl fonnt-semibold">Recent Articles</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center">
          {blogs.map((blog) => (
            <div>
<BlogItem {...blog} key={blog.id}></BlogItem>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Homesection;
