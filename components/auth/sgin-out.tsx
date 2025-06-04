'use client'

import { logout } from "@/app/actions/auth";

const SgininbOut = () => {
    return ( 
        <div>
            <button className="bg-red-500" onClick={()=>logout()}>Sgin out</button>
        </div>
     );
}
 
export default SgininbOut;