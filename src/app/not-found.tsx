import Link from "next/link";
import { SearchX, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-6">
      <div
        className="
          max-w-2xl w-full
          border-4 border-black
          bg-primary
          text-primary-content
          shadow-[10px_10px_0px_0px_#000]
          p-10
          text-center
        "
      >
        <div
          className="
            mx-auto mb-8
            flex h-24 w-24 items-center justify-center
            border-4 border-black
            bg-white
            text-black
            shadow-[6px_6px_0px_0px_#000]
          "
        >
          <SearchX size={52} strokeWidth={2.5} />
        </div>

        <h1 className="text-8xl font-black leading-none">404</h1>

        <h2 className="mt-4 text-4xl font-black uppercase">Page Not Found</h2>

        <p className="mt-5 text-lg font-bold leading-relaxed max-w-xl mx-auto">
          Looks like this page took a vacation.
          <br />
          The page may have been moved, deleted, or never existed.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="
              inline-flex items-center gap-3
              border-4 border-black
              bg-white
              px-6 py-3
              text-black
              font-black
              uppercase
              shadow-[5px_5px_0px_0px_#000]
              transition-all
              hover:translate-x-0.5
              hover:translate-y-0.5
              hover:shadow-[2px_2px_0px_0px_#000]
            "
          >
            <Home size={20} />
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
