import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";

import "../styles/globals.css";
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});


export const metadata: Metadata = {
  title: "PixFit",
  description:
    "PixFit helps creators optimize images and videos for social media with compression, resizing, and platform-specific formatting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${outfit.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col font-sans">
          <Toaster position="top-right" richColors />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
