import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

import { Toaster } from 'sonner';
const  Layout = async({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

   
    return ( 
      
        <div>
             {children}
             <Toaster position="top-center" richColors />
        </div>
     );
} 
 
export default Layout;