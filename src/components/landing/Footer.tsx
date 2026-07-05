import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-primary text-primary-content px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase">
              PixFit
            </h3>

            <p className="font-bold uppercase tracking-wide text-sm">
              Resize • Compress • Share
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="font-bold uppercase text-sm">
              © 2026 PixFit. All Rights Reserved.
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://github.com/SyedShahulAhmed/PixFit"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                border-4 border-black
                bg-white text-black
                px-4 py-2
                font-black uppercase
                shadow-[4px_4px_0px_0px_#000]
                transition-all
                hover:translate-x-0.5
                hover:translate-y-0.5
                hover:shadow-[2px_2px_0px_0px_#000]
              "
            >
              <BsGithub size={18} />
              GitHub
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}