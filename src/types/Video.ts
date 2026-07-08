export interface Video {
  id: string;
  title: string;
  description: string | null;
  userId: string;
  publicId: string;
  originalSize: string;
  compressedSize: string;
  duration: number | null;
  createdAt: string;
  updatedAt: string;
}