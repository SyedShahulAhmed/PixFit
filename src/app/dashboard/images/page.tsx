"use client";

import { CldImage } from "next-cloudinary";
import React, { useEffect, useRef, useState } from "react";

export default function ImageUploaderPage() {
  const socialFormats = {
    InstagramProfile: {
      width: 320,
      height: 320,
      aspectRatio: "1:1",
    },

    FacebookProfile: {
      width: 320,
      height: 320,
      aspectRatio: "1:1",
    },

    FacebookBanner: {
      width: 851,
      height: 315,
      aspectRatio: "2.7:1",
    },

    XProfile: {
      width: 400,
      height: 400,
      aspectRatio: "1:1",
    },

    XBanner: {
      width: 1500,
      height: 500,
      aspectRatio: "3:1",
    },

    LinkedInProfile: {
      width: 400,
      height: 400,
      aspectRatio: "1:1",
    },

    LinkedInBanner: {
      width: 1584,
      height: 396,
      aspectRatio: "4:1",
    },

    YouTubeBanner: {
      width: 2560,
      height: 1440,
      aspectRatio: "16:9",
    },

    PinterestProfile: {
      width: 600,
      height: 600,
      aspectRatio: "1:1",
    },

    DiscordProfile: {
      width: 512,
      height: 512,
      aspectRatio: "1:1",
    },

    AniListProfile: {
      width: 1000,
      height: 1000,
      aspectRatio: "1:1",
    },

    AniListBanner: {
      width: 1920,
      height: 640,
      aspectRatio: "3:1",
    },

    ThreadsBanner: {
      width: 1080,
      height: 608,
      aspectRatio: "16:9",
    },

    BlueskyProfile: {
      width: 400,
      height: 400,
      aspectRatio: "1:1",
    },

    BlueskyBanner: {
      width: 1500,
      height: 500,
      aspectRatio: "3:1",
    },

    WhatsAppProfile: {
      width: 640,
      height: 640,
      aspectRatio: "1:1",
    },
  };

  type SocialFormat = keyof typeof socialFormats;

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const [selectedFormat, setSelectedFormat] =
    React.useState<SocialFormat>("InstagramProfile");

  const [isUploading, setIsUploading] = useState(false);
  const [isTransforming, setIsTransforming] = React.useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    if (uploadedImage) {
      setIsTransforming(true);
    }
  }, [selectedFormat, uploadedImage]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const error = await res.json();
        console.log(error);
        throw new Error(error.error || "Image upload failed");
      }
      const data = await res.json();
      setUploadedImage(data.publicId);
    } catch {
      throw new Error("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    if (!imageRef.current) return;

    fetch(imageRef.current.src)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedFormat.toLowerCase()}.png`;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link); // remove once
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
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
            Image Formatter
          </div>

          <h1 className="text-5xl font-black uppercase">Resize Images</h1>

          <p className="mt-3 text-lg font-medium">
            Upload an image and instantly optimize it for your favorite social
            media platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Controls */}
          <div
            className="
            border-4 border-black
            bg-white
            p-6
            shadow-[8px_8px_0px_0px_#000]
          "
          >
            <h2 className="mb-4 text-2xl font-black uppercase">Upload Image</h2>
<input
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
  className="
    w-full
    border-4 border-black
    bg-white
    p-3
    font-bold

    file:mr-4
    file:border-4
    file:border-black
    file:bg-primary
    file:text-primary-content
    file:px-4
    file:py-2
    file:font-black
    file:uppercase
    file:cursor-pointer
    file:shadow-[4px_4px_0px_0px_#000]
    file:hover:translate-x-[2px]
    file:hover:translate-y-[2px]
    file:hover:shadow-[2px_2px_0px_0px_#000]
  "
/>

            {isUploading && (
              <div className="mt-6 flex items-center gap-3">
                <span className="loading loading-spinner"></span>

                <p className="font-bold uppercase">Uploading...</p>
              </div>
            )}

            <div className="my-6 border-t-4 border-black" />

            <h2 className="mb-4 text-2xl font-black uppercase">Platform</h2>

            <select
              className="
              w-full
              border-4 border-black
              bg-white
              px-4 py-3
              font-bold
            "
              value={selectedFormat}
              onChange={(e) =>
                setSelectedFormat(e.target.value as SocialFormat)
              }
            >
              {Object.keys(socialFormats).map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>

            <div
              className="
              mt-6
              border-4 border-black
              bg-primary text-primary-content
              p-4
              shadow-[4px_4px_0px_0px_#000]
            "
            >
              <p className="text-lg font-black uppercase">{selectedFormat}</p>

              <div className="mt-3 space-y-2 text-sm font-bold">
                <p>Width: {socialFormats[selectedFormat].width}px</p>

                <p>Height: {socialFormats[selectedFormat].height}px</p>

                <p>Ratio: {socialFormats[selectedFormat].aspectRatio}</p>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div
              className="
              border-4 border-black
              bg-white
              p-6
              shadow-[8px_8px_0px_0px_#000]
            "
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-black uppercase">Preview</h2>

                {uploadedImage && (
                  <button
                    onClick={handleDownload}
                    className="
                    border-4 border-black
                    bg-primary text-primary-content
                    px-5 py-3
                    font-black uppercase
                    shadow-[4px_4px_0px_0px_#000]
                    transition-all
                    hover:translate-x-[2px]
                    hover:translate-y-[2px]
                    hover:shadow-[2px_2px_0px_0px_#000]
                  "
                  >
                    Download
                  </button>
                )}
              </div>

              {!uploadedImage ? (
                <div
                  className="
                  flex h-[500px]
                  items-center justify-center
                  border-4 border-dashed border-black
                "
                >
                  <div className="text-center">
                    <p className="text-2xl font-black uppercase">
                      No Image Uploaded
                    </p>

                    <p className="mt-2 font-medium">Upload an image to begin</p>
                  </div>
                </div>
              ) : (
                <div
                  className="
                  relative
                  flex min-h-[500px]
                  items-center justify-center
                  border-4 border-black
                  bg-neutral-100
                  p-6
                "
                >
                  {isTransforming && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90">
                      <span className="loading loading-spinner loading-lg"></span>

                      <p className="mt-4 font-black uppercase">
                        Transforming...
                      </p>
                    </div>
                  )}

                  <CldImage
                    src={uploadedImage}
                    alt="Preview"
                    width={socialFormats[selectedFormat].width}
                    height={socialFormats[selectedFormat].height}
                    crop="fill"
                    gravity="auto"
                    ref={imageRef}
                    className="
                    max-h-[500px]
                    w-auto
                    border-4 border-black
                    shadow-[8px_8px_0px_0px_#000]
                  "
                    onLoad={() => setIsTransforming(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="mt-12">
          <h2 className="mb-6 text-4xl font-black uppercase">
            Supported Platforms
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {Object.entries(socialFormats).map(([name, config]) => (
              <button
                key={name}
                onClick={() => setSelectedFormat(name as SocialFormat)}
                className={`
                border-4 border-black
                p-4
                text-left
                shadow-[6px_6px_0px_0px_#000]
                transition-all
                hover:-translate-y-1
                ${
                  selectedFormat === name
                    ? "bg-primary text-primary-content"
                    : "bg-white text-black"
                }
              `}
              >
                <h3 className="font-black uppercase">{name}</h3>

                <p className="mt-2 text-sm font-bold">
                  {config.width} × {config.height}
                </p>

                <p className="text-sm font-bold">{config.aspectRatio}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
