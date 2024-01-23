"use client";

// import React from 'react'
import Logo from "./Logo";
import { useSession } from "next-auth/react";
import Link from "next/link";

const authlinks = [
  { id: "1-1", name: "Blogs", url: "/blogs" },
  { id: "1-2", name: "Write", url: "/write" },
  { id: "1-3", name: "Profile", url: "/profile" },
  { id: "1-4", name: "Search", url: "/search" },
];
const nonauthlinks = [
  { id: "2-1", name: "Blogs", url: "/blogs" },
  { id: "2-2", name: "Login", url: "/login" },
  { id: "2-3", name: "Register", url: "/register" },
];

export default function Appbar() {
  const { status } = useSession();
  return (
    <section className="bg-gray-100 sticky w-full ">
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
        <div>
          <Logo></Logo>
        </div>
        <div className="flex items-center gap-4 p-2">
          {(status === "authenticated" ? authlinks : nonauthlinks).map(
            (item) => (
              <Link
                href={item.url}
                className="text-gray-900 text-lg font-semibold hover:text-violet-600 duration-300"
                key={item.id}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </nav>
    </section>
  );
}
