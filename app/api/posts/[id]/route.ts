import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.post.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const post = await prisma.post.findUnique({
            where: { id: params.id },
            include: { images: true }
        })

        if (!post) {
            return NextResponse.json(
                { error: "Post not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(post)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch post" },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json()
        
        const updatedPost = await prisma.post.update({
            where: { id: params.id },
            data: {
                title: body.title,
                excerpt: body.excerpt,
                content: body.content,
                blockquote: body.blockquote
            },
            include: {
                images: true
            }
        })

        return NextResponse.json(updatedPost)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update post" },
            { status: 500 }
        )
    }
}