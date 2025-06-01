import { InputData } from "@/components/inputdata";
import { getPostbyId } from "../services";

const AdminNewslist = async (props:{id:string}) => {
    const {id}=props
   const post = await getPostbyId(id)

    return ( 

        <div>
            <InputData post={post}/>
        </div>
     );
}
 
export default AdminNewslist;