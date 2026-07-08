"use client";

import { useEffect, useState } from "react";
import VideoCard from "@/components/VideoCard";
import type { Video } from "@/types/Video";

export default function DashboardPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/video");
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleDownload = async (url: string, title: string) => {
    const response = await fetch(url);
    const blob = await response.blob();

    const downloadUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${title}.mp4`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(downloadUrl);
  };

  const safeVideos = Array.isArray(videos) ? videos : [];
  return (
    <main className="space-y-10 p-6">
      {/* Header */}
      <div>
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
          Dashboard
        </div>

        <h1 className="text-5xl font-black uppercase">Welcome Back 👋</h1>

        <p className="mt-3 text-lg font-medium">
          Manage and download your compressed videos from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="
        border-4 border-black
        bg-white
        p-6
        shadow-[8px_8px_0px_0px_#000]
      "
        >
          <h2 className="text-sm font-black uppercase mb-3">Total Videos</h2>

          <p className="text-5xl font-black">{videos.length}</p>
        </div>

        <div
          className="
        border-4 border-black
        bg-primary text-primary-content
        p-6
        shadow-[8px_8px_0px_0px_#000]
      "
        >
          <h2 className="text-sm font-black uppercase mb-3">Storage Saved</h2>

          <p className="text-5xl font-black">
            {safeVideos.reduce(
              (acc, video) =>
                acc +
                (Number(video.originalSize) - Number(video.compressedSize)),
              0,
            ) /
              1024 /
              1024 >
            0
              ? `${(
                  safeVideos.reduce(
                    (acc, video) =>
                      acc +
                      (Number(video.originalSize) -
                        Number(video.compressedSize)),
                    0,
                  ) /
                  1024 /
                  1024
                ).toFixed(1)} MB`
              : "0 MB"}
          </p>
        </div>
      </div>

      {/* Recent Videos */}
      <section>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-black uppercase">Recent Videos</h2>

          <div
            className="
          w-fit
          border-4 border-black
          bg-primary text-primary-content
          px-4 py-2
          font-black uppercase
          shadow-[4px_4px_0px_0px_#000]
        "
          >
            {videos.length} Videos
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : videos.length === 0 ? (
          <div
            className="
          border-4 border-black
          bg-white
          p-10
          text-center
          shadow-[8px_8px_0px_0px_#000]
        "
          >
            <h3 className="text-2xl font-black uppercase">No Videos Yet</h3>

            <p className="mt-3 font-medium">
              Upload your first video to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {safeVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onDownload={handleDownload}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
