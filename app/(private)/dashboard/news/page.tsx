import SgininbOut from "@/components/auth/sgin-out";
import { auth } from "@/lib/auth";
import { AdminDetails } from "@/modules/news/admindetails";

const Page = async() => {
    const sesstion= await auth()
    return ( 
        <div>
            <AdminDetails/>
            <div className="flex justify-center py-5">

            <SgininbOut/>
            </div>
        </div>
     );
}
 
export default Page;