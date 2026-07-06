import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-black uppercase">
          Welcome To PixFit
        </h1>

        <p className="mt-3 text-lg font-medium">
          Resize, compress, and optimize your media for every platform.
        </p>
      </div>

      <SignIn />
    </div>
  );
}