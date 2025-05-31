import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Post } from '@/types';

type NewsdetailsProps = {
  post: Post;
};

const Newsdetails = ({ post }: NewsdetailsProps) => {
  if (!post) {
    return <div>پست یافت نشد</div>;
  }

;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Image */}
      <Card className="mb-6">
        <CardContent className="p-0">
          <Image
            src={post.images?.[0]?.images}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg w-full h-96 object-cover"
            priority
          />
        </CardContent>
      </Card>

      {/* Post Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Post Metadata */}
      <div className="flex items-center text-gray-600 mb-6">
        <span className="mr-4">تاریخ: {new Date(post.created_at).toLocaleDateString('fa-IR')}</span>
      </div>

      {/* Post Content */}
      <div className="prose prose-lg text-gray-800 mb-8">
        <p>{post.excerpt}</p>
        
        {/* Main Content */}
        <p>{post.content}</p> {/* Changed from 'mian' to 'content' */}

        {/* Blockquote */}
        {post.blockquote && (
          <blockquote className="border-r-4 border-gray-300 pr-4 py-2 bg-gray-100 my-6">
            <p className="text-lg italic">{post.blockquote}</p>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default Newsdetails;