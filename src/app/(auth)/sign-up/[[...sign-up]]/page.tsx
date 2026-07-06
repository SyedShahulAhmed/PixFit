import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mb-8 text-center">
        <div
          className="
            inline-block
            border-4 border-black
            bg-primary text-primary-content
            px-4 py-2
            font-black uppercase
            shadow-[4px_4px_0px_0px_#000]
            mb-4
          "
        >
          PixFit
        </div>

        <h1 className="text-5xl font-black uppercase">
          Join PixFit
        </h1>

        <p className="mt-3 text-lg font-medium">
          Create your account and start resizing, compressing,
          and optimizing media in seconds.
        </p>
      </div>

      <SignUp />
    </div>
  );
}