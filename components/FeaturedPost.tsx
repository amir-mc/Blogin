// components/FeaturedPost.tsx
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type FeaturedPostProps = {
  id?: number;
  title: string;
  excerpt: string;
  image: string;
};

export default function FeaturedPost({ title, excerpt, image, id }: FeaturedPostProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-12">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        {id ? (
          <Link href={`/posts/${id}`} className="text-blue-600 hover:underline">
            ادامه مطلب
          </Link>
        ) : (
          <span className="text-gray-500">لینک موجود نیست</span>
        )}
      </div>
      <div className="md:w-1/2">
        <Card>
          <CardContent className="p-0">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}