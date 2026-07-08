"use client";

import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import Image from "next/image";

import relativeTime from "dayjs/plugin/relativeTime";
;
import { getCldImageUrl } from "next-cloudinary";
import { filesize } from "filesize";
import { Download, Clock, HardDrive, Calendar } from "lucide-react";
import type { Video } from "@/types/Video";

dayjs.extend(relativeTime);

interface VideoCardProps {
  video: Video;
  onDownload: (url: string, title: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onDownload }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const getThumbnailUrl = useCallback((publicId: string) => {
    return getCldImageUrl({
      src: publicId,
      width: 800,
      height: 450,
      crop: "fill",
      gravity: "auto",
      format: "jpg",
      quality: "auto",
      assetType: "video",
    });
  }, []);

  const getVideoUrl = useCallback((publicId: string) => {
    return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}`;
  }, []);

  const getPreviewVideoUrl = useCallback((publicId: string) => {
    return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}`;
  }, []);

  const formatSize = useCallback((size: number) => {
    return filesize(size);
  }, []);

  const formatDuration = useCallback((duration: number) => {
    const totalSeconds = Math.floor(duration);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, []);
  const compressionPercentage = useCallback(
    (originalSize: number, compressedSize: number) => {
      if (originalSize === 0) return 0;

      return Math.round(((originalSize - compressedSize) / originalSize) * 100);
    },
    [],
  );

  const savedPercentage = compressionPercentage(
    Number(video.originalSize),
    Number(video.compressedSize),
  );

  return (
    <div
      className="
      group
      overflow-hidden
      border-4 border-black
      bg-white
      shadow-[8px_8px_0px_0px_#000]
      transition-all
      hover:-translate-y-2
    "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPreviewError(false);
      }}
    >
      {/* Thumbnail / Preview */}
      <figure className="relative h-56 overflow-hidden border-b-4 border-black bg-neutral-100">
        {isHovered && !previewError ? (
          <video
            src={getPreviewVideoUrl(video.publicId)}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            onError={() => setPreviewError(true)}
          />
        ) : (
          <Image
            src={getThumbnailUrl(video.publicId)}
            alt={video.title}
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Saved Badge */}
        <div
          className="
          absolute left-3 top-3 z-10
          border-2 border-black text-black bg-white
          bg-primary text-primary-content
          px-3 py-1
          text-xs font-black uppercase
          shadow-[3px_3px_0px_0px_#000]
        "
        >
          {savedPercentage}% Saved
        </div>

        {/* Duration Badge */}
        <div
          className="
          absolute bottom-3 right-3 z-10
          flex items-center gap-1.5
          border-2 border-black
          bg-white text-black
          px-3 py-1
          text-xs font-black uppercase
          shadow-[3px_3px_0px_0px_#000]
        "
        >
          <Clock size={12} />
          {formatDuration(Number(video.duration))}
        </div>
      </figure>

      {/* Body */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-black uppercase">
          {video.title}
        </h2>

        {/* Description */}
        {video.description && (
          <p className="mt-3 line-clamp-2 text-sm font-medium">
            {video.description}
          </p>
        )}

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div
            className="
            border-4 border-black
            bg-white
            p-3
            shadow-[4px_4px_0px_0px_#000]
          "
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase">
              <HardDrive size={13} />
              Original
            </div>

            <p className="text-lg font-black">
              {formatSize(Number(video.originalSize))}
            </p>
          </div>

          <div
            className="
            border-4 border-black
            bg-primary text-primary-content
            p-3
            shadow-[4px_4px_0px_0px_#000]
          "
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase">
              <HardDrive size={13} />
              Compressed
            </div>

            <p className="text-lg font-black">
              {formatSize(Number(video.compressedSize))}
            </p>
          </div>
        </div>

        {/* Upload Date */}
        <div
          className="
          mt-5
          flex items-center gap-2
          border-2 border-black
          bg-neutral-100
          px-3 py-2
          text-xs font-black uppercase
        "
        >
          <Calendar size={14} />
          Uploaded {dayjs(video.createdAt).fromNow()}
        </div>

        {/* Download Button */}
        <button
          onClick={() => onDownload(getVideoUrl(video.publicId), video.title)}
          className="
          mt-5
          flex w-full items-center justify-center gap-2
          border-4 border-black
          bg-primary text-primary-content
          px-4 py-3
          font-black uppercase
          shadow-[6px_6px_0px_0px_#000]
          transition-all
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          hover:shadow-[3px_3px_0px_0px_#000]
        "
        >
          <Download size={18} />
          Download Video
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
