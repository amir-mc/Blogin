// app/api/posts/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
// app/api/posts/route.ts


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Get query parameters
  // const page = parseInt(searchParams.get('page') || '1');
  // const limit = parseInt(searchParams.get('limit') || '10');
  // const search = searchParams.get('search') || '';
  // const includeImages = searchParams.get('includeImages') === 'true';

  try {
    // Base query conditions
  
    const result = await prisma.post.findMany({include:{images:true}});
        return NextResponse.json({
            data: result
        });

  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to fetch posts",
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        blockquote: body.blockquote,
        images: {
          create: [] // Add image creation logic here if needed
        }
      },
      include: {
        images: true
      }
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}

