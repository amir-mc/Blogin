import { imagekit } from "@/lib/imagekit";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const NewsId = formData.get('newsId') as string;

    if (!file || !NewsId) {
      return NextResponse.json(
        { error: "Missing file or productId" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `${NewsId}-${Date.now()}.${file.name.split('.').pop()}`,
      folder: "/Blogin",
      useUniqueFileName: true,
      tags: [`news-${NewsId}`]
    });

        const uploadProduct=await prisma.post.update({
        where:{id:NewsId},
        data:{
            images:{
                create:{ images: uploadResponse.url,}
            }
        },
        include:{images:true}
        })
    return NextResponse.json({
      ...uploadResponse, // ✅ Send the full object
        data: uploadProduct,
    });
     
    

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}