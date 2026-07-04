import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch {
    return NextResponse.json(
      { error: "Error while fetching videos" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
