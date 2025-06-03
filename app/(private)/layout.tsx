import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

import { Toaster } from 'sonner';
const  Layout = async({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    try {
    const session = await auth();
    
    if (!session?.user) {
      redirect("/signin");
    } 
    return ( 
      
        <div>
             {children}
             <Toaster position="top-center" richColors />
        </div>
     );
} catch (error) {
    console.error("Authentication error:", error);
    redirect("/signin");
  }
}
 
export default Layout;