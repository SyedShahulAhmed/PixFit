import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-15">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
          <span className="inline-block border-4 border-base-content bg-base-100 px-4 py-2 shadow-[8px_8px_0px_0px_hsl(var(--bc))] -rotate-1">
            Resize,
          </span>

          <br />

          <span className="inline-block bg-primary text-primary-content border-4 border-base-content px-4 py-2 mt-4 shadow-[8px_8px_0px_0px_hsl(var(--bc))] rotate-1">
            Compress
          </span>

          <br />

          <span className="inline-block border-4 border-base-content bg-base-100 px-4 py-2 mt-4 shadow-[8px_8px_0px_0px_hsl(var(--bc))] -rotate-1">
            Media For Every Platform
          </span>
        </h1>
        <p className="mt-10 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Instantly resize images for Instagram, YouTube, LinkedIn, X, and more.
          Compress videos without sacrificing quality and download them in
          seconds.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/dashboard"
            className="
              inline-flex items-center gap-2
              border-4 border-black
              bg-primary text-primary-content
              px-8 py-4
              font-black uppercase
              shadow-[6px_6px_0px_0px_#000]
              transition-all
              hover:translate-x-0.75
              hover:translate-y-0.75
              hover:shadow-[3px_3px_0px_0px_#000]
            "
          >
            Start Creating
            <ArrowRight size={20} />
          </Link>

          <a
            href="#features"
            className="
              inline-flex items-center
              border-4 border-black
              bg-white
              px-8 py-4
              font-black uppercase
              shadow-[6px_6px_0px_0px_#000]
              transition-all
              hover:translate-x-0.75
              hover:translate-y-0.75
              hover:shadow-[3px_3px_0px_0px_#000]
            "
          >
            Learn More
          </a>
        </div>
        {/* Decorative Neo-Brutalist Blocks */}
        <div className="hidden lg:flex justify-center gap-6 mt-20">
          <div className="w-32 h-32 bg-primary border-4 border-black shadow-[8px_8px_0px_0px_#000] flex items-center justify-center">
            <span className="text-3xl font-black text-primary-content">
              1:1
            </span>
          </div>

          <div className="w-32 h-32 bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] rotate-6 flex items-center justify-center">
            <span className="text-3xl font-black text-black">16:9</span>
          </div>

          <div className="w-32 h-32 bg-primary border-4 border-black shadow-[8px_8px_0px_0px_#000] -rotate-6 flex items-center justify-center">
            <span className="text-3xl font-black text-primary-content">
              9:16
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
