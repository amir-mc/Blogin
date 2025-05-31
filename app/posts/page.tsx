// app/page.tsx

import { prisma } from "@/lib/prisma";
import NewsList from "@/modules/view/newslist";
import { Post } from "@/types";



export default async function Home() {
const posts = await prisma.post.findMany({
    include: {
      images: true
    },
    orderBy: {
      created_at: 'desc'
    }
  }) as unknown as Post[];  // Temporary type assertion

  const featuredPost = posts[0];
  return (
    <div>
        <NewsList posts={posts} featuredPost={featuredPost}/>
    </div>
  );
}