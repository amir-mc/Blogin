// app/posts/[id]/page.tsx


import Newsdetails from '@/modules/view/newsdetails';


export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
      const data = await params;
      const { id } =  data;

  return (
  <div>
    <Newsdetails id={id}/>
  </div>
  );
}


