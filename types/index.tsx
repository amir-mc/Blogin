// import { Prisma } from "@/generated/prisma";

// export type ProductWithImages = Prisma.productGetPayload<{
//   include: { images: true }
// }>;
export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  blockquote: string;
  created_at: Date;
 images: Image[];
  
};
export type PostCardProps = {
  id?: string; // Changed from number to string to match UUID
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

export type Image = {
  id: string;
  images: string; // Change from 'url' to 'images' to match Prisma
    Postid: string | null;
};