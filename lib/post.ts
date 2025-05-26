// lib/posts.ts
export type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};


export const featuredPost: Post = {
  id: 1,
  title: 'چطور در سال ۱۴۰۴ وبلاگ خود را شروع کنیم: راهنمای جامع',
  excerpt: 'در این پست، هر آنچه برای شروع یک وبلاگ موفق نیاز دارید را یاد می‌گیرید.',
  date: '1404/03/05',
  image: 'https://placehold.co/600x400.png?text=Featured+Post',
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'چطور در سال ۱۴۰۴ وبلاگ خود را شروع کنیم: راهنمای جامع',
    excerpt: 'در این پست، هر آنچه برای شروع یک وبلاگ موفق نیاز دارید را یاد می‌گیرید.',
    date: '1404/03/05',
    image: 'https://placehold.co/600x400.png?text=Featured+Post',
  },
  {
    id: 2,
    title: 'چگونه یک توسعه‌دهنده موفق باشیم',
    excerpt: 'نکات و ترفندهایی برای موفقیت در توسعه نرم‌افزار.',
    date: '1404/03/04',
    image: 'https://placehold.co/300x200.png?text=Post+1',
  },
  {
    id: 3,
    title: 'آموزش React در 30 روز',
    excerpt: 'یادگیری React از پایه تا پیشرفته',
    date: '1404/03/03',
    image: 'https://placehold.co/300x200.png?text=Post+2',
  },
  {
    id: 4,
    title: 'چطور از رنگ‌ها در طراحی UI استفاده کنیم',
    excerpt: 'راهنمای انتخاب پالت رنگی برای طراحی بهتر.',
    date: '1404/03/02',
    image: 'https://placehold.co/300x200.png?text=Post+3',
  },
  {
    id: 5,
    title: '۲۰ ایده برای پروژه‌های برنامه‌نویسی',
    excerpt: 'ایده‌هایی برای تمرین کدنویسی و بهبود مهارت‌ها.',
    date: '1404/03/01',
    image: 'https://placehold.co/300x200.png?text=Post+4',
  },
];