import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div
        className="
          mx-auto max-w-5xl
          border-4 border-black
          bg-primary text-primary-content
          p-10 md:p-16
          shadow-[10px_10px_0px_0px_#000]
        "
      >
        <div className="text-center">
          <div
            className="
              inline-block
              border-4 border-black
              bg-white text-black
              px-5 py-2
              font-black uppercase
              shadow-[4px_4px_0px_0px_#000]
              mb-8
            "
          >
            Start Creating Today
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
            Ready To Optimize
            <br />
            Your Content?
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg">
            Upload, resize, compress, and export media perfectly tailored for
            every platform.
          </p>

          <div className="mt-10">
            <Link
              href="/dashboard"
              className="
                inline-flex items-center gap-2
                border-4 border-black
                bg-white text-black
                px-8 py-4
                font-black uppercase
                shadow-[6px_6px_0px_0px_#000]
                transition-all
                hover:translate-x-0.75
                hover:translate-y-0.75
                hover:shadow-[3px_3px_0px_0px_#000]
              "
            >
              Start For Free <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
