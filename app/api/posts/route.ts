// app/api/posts/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      images: true
    },
    orderBy: {
      created_at: 'desc'
    }
  });
  return NextResponse.json(posts);
}