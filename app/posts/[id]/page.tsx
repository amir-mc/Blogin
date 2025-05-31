// app/posts/[id]/page.tsx


import Newsdetails from '@/modules/view/newsdetails';
import { prisma } from '@/lib/prisma';


export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
      const data = await params;
      const { id } =  data;
 try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        images: true
      }
    });

    if (!post) {
      return <div className="text-center py-20">پست یافت نشد</div>;
    }

    return (
      <div>
        <Newsdetails post={post} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    return <div className="text-center py-20">خطا در دریافت پست</div>;
  }
}


