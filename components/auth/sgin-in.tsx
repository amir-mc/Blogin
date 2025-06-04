'use client'
import { login } from "@/app/actions/auth";

const Sgininbut = () => {
    return ( 
        <div>
            <button className="bg-green-500" onClick={()=>login()}>Login to account</button>
        </div>
     );
}
 
export default Sgininbut;