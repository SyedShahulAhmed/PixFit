import { ImageIcon, VideoIcon, User2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div
            className="
              inline-block
              border-4 border-black
              bg-primary text-primary-content
              px-5 py-2
              font-black uppercase
              shadow-[4px_4px_0px_0px_#000]
              mb-6
            "
          >
            Features
          </div>

          <h2 className="text-5xl md:text-6xl font-black uppercase">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Perfect dimensions. Smaller files. Faster sharing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            className="
              border-4 border-black
              bg-white
              p-8
              shadow-[8px_8px_0px_0px_#000]
              transition-all
              hover:-translate-y-2
            "
          >
            <div
              className="
                w-fit
                border-4 border-black
                bg-primary
                p-4
                shadow-[4px_4px_0px_0px_#000]
                mb-6
              "
            >
              <ImageIcon size={36} className="text-primary-content" />
            </div>

            <h3 className="text-2xl font-black uppercase mb-4">
              Image Formatter
            </h3>

            <p className="text-base leading-relaxed">
              Resize images for Instagram, Facebook, LinkedIn, X, Pinterest,
              YouTube, and dozens of other social platforms.
            </p>
          </div>

          <div
            className="
              border-4 border-black
              bg-primary text-primary-content
              p-8
              shadow-[8px_8px_0px_0px_#000]
              transition-all
              hover:-translate-y-2
            "
          >
            <div
              className="
                w-fit
                border-4 border-black
                bg-white
                p-4
                shadow-[4px_4px_0px_0px_#000]
                mb-6
              "
            >
              <VideoIcon size={36} className="text-black" />
            </div>

            <h3 className="text-2xl font-black uppercase mb-4">
              Video Compression
            </h3>

            <p className="leading-relaxed">
              Compress videos without sacrificing quality. Faster uploads,
              quicker sharing, and less storage usage.
            </p>
          </div>

          <div
            className="
              border-4 border-black
              bg-white
              p-8
              shadow-[8px_8px_0px_0px_#000]
              transition-all
              hover:-translate-y-2
            "
          >
            <div
              className="
                w-fit
                border-4 border-black
                bg-primary
                p-4
                shadow-[4px_4px_0px_0px_#000]
                mb-6
              "
            >
              <User2 size={36} className="text-primary-content" />
            </div>

            <h3 className="text-2xl font-black uppercase mb-4">Social Ready</h3>

            <p className="leading-relaxed">
              One-click presets for social media posts, banners, thumbnails,
              profile pictures, reels, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
