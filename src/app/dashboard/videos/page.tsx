"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Upload, Video, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function VideosPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const router = useRouter();

  const max_file_size = 70 * 1024 * 1024;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      toast("Please select a video.");
      return;
    }

    if (file.size > max_file_size) {
      toast("File size exceeds the maximum limit of 70MB.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("originalSize", file.size.toString());

    try {
      const res = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload video");
      }
      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        throw new Error(data.error);
      }
      toast("Video uploaded successfully.");

      setFile(null);
      setTitle("");
      setDescription("");
      router.refresh();
      router.push(`/dashboard`);
    } catch (e) {
      console.log(e);
      toast("An error occurred while uploading the video.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
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
          Video Compressor
        </div>

        <h1 className="text-5xl font-black uppercase">Upload Videos</h1>

        <p className="mt-3 text-lg font-medium">
          Compress and optimize videos for faster uploads and sharing.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
        border-4 border-black
        bg-white
        p-6
        shadow-[8px_8px_0px_0px_#000]
      "
      >
        {/* Upload Area */}
        <label
          htmlFor="video-upload"
          className="
          flex min-h-[320px]
          cursor-pointer
          flex-col
          items-center
          justify-center
          border-4 border-dashed border-black
          bg-neutral-100
          p-8
          text-center
          transition-all
          hover:bg-neutral-200
        "
        >
          <div
            className="
            mb-6
            border-4 border-black
            bg-primary text-primary-content
            p-4
            shadow-[4px_4px_0px_0px_#000]
          "
          >
            <Video className="h-10 w-10" />
          </div>

          <h3 className="text-2xl font-black uppercase">
            {file ? file.name : "Upload A Video"}
          </h3>

          <p className="mt-3 font-medium">MP4 • MOV • AVI • WEBM</p>

          <p className="mt-1 text-sm font-bold uppercase">
            Maximum File Size: 70MB
          </p>

          <div
            className="
            mt-6
            border-4 border-black
            bg-white
            px-4 py-2
            font-black uppercase
            shadow-[4px_4px_0px_0px_#000]
          "
          >
            <Upload className="inline mr-2 h-5 w-5" />
            Choose File
          </div>

          <input
            id="video-upload"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>

        {/* File Info */}
        {file && (
          <div
            className="
            mt-6
            border-4 border-black
            bg-primary text-primary-content
            p-4
            shadow-[4px_4px_0px_0px_#000]
          "
          >
            <p className="font-black uppercase">{file.name}</p>

            <p className="mt-1 text-sm font-bold">
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
        )}

        {/* Inputs */}
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
            w-full
            border-4 border-black
            bg-white
            px-4 py-3
            font-bold
            outline-none
          "
          />

          <textarea
            placeholder="Video Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="
            w-full
            border-4 border-black
            bg-white
            px-4 py-3
            font-bold
            outline-none
            resize-none
          "
          />
        </div>

        {/* Upload Button */}
        <button
          type="submit"
          disabled={isUploading}
          className="
          mt-6
          flex w-full items-center justify-center gap-2
          border-4 border-black
          bg-primary text-primary-content
          px-5 py-4
          font-black uppercase
          shadow-[6px_6px_0px_0px_#000]
          transition-all
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          hover:shadow-[3px_3px_0px_0px_#000]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
        >
          {isUploading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Uploading Video...
            </>
          ) : (
            <>
              <Upload className="h-5 w-5" />
              Upload Video
            </>
          )}
        </button>
      </form>
    </div>
  );
}
