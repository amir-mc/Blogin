// components/PostCard.tsx
import { Card, CardContent } from '@/components/ui/card';
import { PostCardProps } from '@/types';

import Link from 'next/link';
import ImageToolkits from './imagetoolkit';



export default function PostCard({ title, excerpt, image, date, id }: PostCardProps) {
   console.log(image)
  return (
    <Card className="mb-6">
      <CardContent className="p-0">
        <ImageToolkits
          src={image || 'https://placehold.co/600x400?text=No+Image'}
          alt={title}
          width={300}
          height={200}
          className="rounded-t-lg w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{excerpt}</p>
          <p className="text-sm text-gray-500 mb-4">تاریخ: {date}</p>
          {id ? (
            <Link href={`/posts/${id}`} className="text-blue-600 hover:underline">
              ادامه مطلب
            </Link>
          ) : (
            <span className="text-gray-500">لینک موجود نیست</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}