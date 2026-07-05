"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <header className="border-b-4 border-black bg-base-100 px-6 py-4 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="
            text-3xl font-black uppercase tracking-tight
            transition-transform
            hover:-translate-y-1
          "
        >
          PIXFIT
        </Link>

        <div className="flex items-center gap-4">
          {!isSignedIn ? (
            <>
              <Link
                href="/sign-in"
                className="
                  border-4 border-black
                  bg-white
                  px-5 py-2
                  font-bold
                  shadow-[4px_4px_0px_0px_#000]
                  transition-all
                  hover:translate-x-0.5
                  hover:translate-y-0.5
                  hover:shadow-[2px_2px_0px_0px_#000]
                "
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="
                  border-4 border-black
                  bg-primary
                  px-5 py-2
                  font-bold text-primary-content
                  shadow-[4px_4px_0px_0px_#000]
                  transition-all
                  hover:translate-x-0.5
                  hover:translate-y-0.5
                  hover:shadow-[2px_2px_0px_0px_#000]
                "
              >
                Get Started
              </Link>
            </>
          ) : (
            <Link
              href="/dashboard"
              className="
                border-4 border-black
                bg-primary
                px-5 py-2
                font-bold text-primary-content
                shadow-[4px_4px_0px_0px_#000]
                transition-all
                hover:translate-x-0.5
                hover:translate-y-0.5
                hover:shadow-[2px_2px_0px_0px_#000]
              "
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
