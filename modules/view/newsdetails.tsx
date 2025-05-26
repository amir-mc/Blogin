import Image from 'next/image';
import { posts, Post } from '@/lib/post';
import { Card, CardContent } from '@/components/ui/card';


const Newsdetails = async ({id}:{id:string}) => {

     
    
      const post = posts.find((p) => p.id.toString() === id);
    
      if (!post) {
        return <div>پست یافت نشد</div>;
      }
    return ( 

          <div className="max-w-4xl mx-auto">
      {/* تصویر اصلی */}
      <Card className="mb-6">
        <CardContent className="p-0">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg w-full h-96 object-cover"
          />
        </CardContent>
      </Card>

      {/* عنوان پست */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* اطلاعات پست */}
      <div className="flex items-center text-gray-600 mb-6">
        <span className="mr-4">نویسنده: کاربر نمونه</span>
        <span className="mr-4">{post.date}</span>
        <span>ساعت: ۱۰:۳۰ صبح</span>
      </div>

      {/* محتوای پست */}
      <div className="prose prose-lg text-gray-800 mb-8">
        <p>
          این سال، یاد می‌گیرید چطور یه کیک رنگین‌کمانی خوشمزه درست کنید که قلب‌ها رو فوراً تسخیر کنه. ما دستور پخت کاملی از ترکیب کیک گرفته تا کرم خامه‌ای رو بهتون می‌دیم (بله، هر دو!). تزیینات، لوازم مورد نیاز و خیلی چیزای دیگه - ما همه چیزایی که لازم دارید رو بهتون می‌گیم.
        </p>
        <p>
          می‌خوای چهره‌ی خانواده یا دوستاتون رو وقتی که یه کیک رنگین‌کمانی خیره‌کننده می‌بینن، تصور کنی؟ این پست دقیقاً همون چیزیه که برای این لحظه نیاز داری. با دستور پخت ما، می‌تونی به‌راحتی خوشمزه‌ترین کیک رنگین‌کمانی رو درست کنی.
        </p>

        {/* نقل‌قول */}
        <blockquote className="border-r-4 border-gray-300 pr-4 py-2 bg-gray-100 my-6">
          <p className="text-lg italic">
            می‌خوای چهره‌ی خانواده یا دوستاتون رو وقتی که یه کیک رنگین‌کمانی خیره‌کننده می‌بینن، تصور کنی؟ این پست همون چیزیه که برای این لحظه نیاز داری.
          </p>
        </blockquote>

        <p>
          از ترکیب کیک شروع می‌کنیم و بعد به سراغ کرم خامه‌ای می‌ریم. این دستور پخت نه‌تنها خوشمزه‌ست، بلکه درست کردنش [بقیه متن دلخواه].
        </p>
      </div>
    </div>
     );
}
 
export default Newsdetails;