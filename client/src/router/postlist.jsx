import { useState } from "react";
import MenuSide from "../components/menupost";
import Postitem from "../components/postitem";

const Postlist = () => {
    const [open,isopen]=useState(false)
    return ( 
        <div className="">
            <h1>Post List</h1>
            <button onClick={()=>isopen((prev)=>!prev)} className="bg-purple-500 text-sm text-black px-4 py-2 rounded-2xl mb-4 md:hidden">menu</button>
            <div className="flex flex-col-reverse md:flex-row gap-8">
                <div className="">
                    <Postitem/>
                </div>
                <div className={`${open ? "blok" : " hidden" } md:block`}>
                    <MenuSide/>
                </div>
            </div>
        </div>
     );
}
 
export default Postlist;