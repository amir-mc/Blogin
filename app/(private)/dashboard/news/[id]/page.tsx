
import AdminNewslist from "@/modules/news/adminnewslist";

const Page = async ({ params }: {params:Promise<{id:string}>}) => {
      const data= await params
      const {id}=data
    return ( 

        <div>
            <AdminNewslist id={id}/>
        </div>
     );
}
 
export default Page;