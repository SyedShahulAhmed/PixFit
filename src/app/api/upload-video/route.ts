import { v2 as cloudinary } from "cloudinary";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryUploadResult {
  public_id: string;
  bytes: number;
  duration?: number;
  [key: string]:
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | unknown[];
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (
      !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        { error: "Cloudinary configuration is missing" },
        { status: 500 }
      );
    }

    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string | null;
    const description = formData.get("description") as string | null;
    const originalSize = formData.get("originalSize") as string | null;

    if (!file) {
      return NextResponse.json(
        { error: "File not found" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const res = await new Promise<CloudinaryUploadResult>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "video",
            folder: "Pixfit/videos",
            transformation: [
              {
                quality: "auto",
                fetch_format: "mp4",
              },
            ],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as CloudinaryUploadResult);
            }
          }
        );

        uploadStream.end(buffer);
      }
    );

    const video = await prisma.video.create({
      data: {
        title: title ?? "",
        description,
        originalSize: originalSize ?? "",
        userId : userId,
        publicId: res.public_id,
        compressedSize: String(res.bytes),
        duration: res.duration ?? 0,
      },
    });

    return NextResponse.json(video);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Video Upload Failed",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}