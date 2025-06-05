import SgininbOut from "@/components/auth/sgin-out";
import { AdminDetails } from "@/modules/news/admindetails";
import { getPosts } from "@/modules/services";

const Page = async() => {

    const news= await getPosts()
    return ( 
        <div>
            <AdminDetails news={news}/>
            <div className="flex justify-center py-5">

            <SgininbOut/>
            </div>
        </div>
     );
}
 
export default Page;