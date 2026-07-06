"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Home, ImageIcon, Video } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b-4 border-black bg-primary text-primary-content">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/dashboard"
          className="
            border-4 border-black
            bg-white text-black
            px-4 py-2
            text-2xl font-black uppercase
            shadow-[4px_4px_0px_0px_#000]
            transition-all
            hover:translate-x-[2px]
            hover:translate-y-[2px]
            hover:shadow-[2px_2px_0px_0px_#000]
          "
        >
          PixFit
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/dashboard"
            className="
              flex items-center gap-2
              border-4 border-black
              bg-white text-black
              px-4 py-2
              font-black uppercase
              shadow-[4px_4px_0px_0px_#000]
              transition-all
              hover:translate-x-[2px]
              hover:translate-y-[2px]
              hover:shadow-[2px_2px_0px_0px_#000]
            "
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            href="/dashboard/images"
            className="
              flex items-center gap-2
              border-4 border-black
              bg-white text-black
              px-4 py-2
              font-black uppercase
              shadow-[4px_4px_0px_0px_#000]
              transition-all
              hover:translate-x-[2px]
              hover:translate-y-[2px]
              hover:shadow-[2px_2px_0px_0px_#000]
            "
          >
            <ImageIcon size={18} />
            Images
          </Link>

          <Link
            href="/dashboard/videos"
            className="
              flex items-center gap-2
              border-4 border-black
              bg-white text-black
              px-4 py-2
              font-black uppercase
              shadow-[4px_4px_0px_0px_#000]
              transition-all
              hover:translate-x-[2px]
              hover:translate-y-[2px]
              hover:shadow-[2px_2px_0px_0px_#000]
            "
          >
            <Video size={18} />
            Videos
          </Link>
        </nav>

        {/* User */}
        <div
          className="
            border-4 border-black
            bg-white
            p-1
            shadow-[4px_4px_0px_0px_#000]
          "
        >
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}