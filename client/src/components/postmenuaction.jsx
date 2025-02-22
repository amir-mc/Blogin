import { Bookmark, Trash2,  } from "lucide-react";

const Postmenuaction = () => {
    return ( 
        <div className="pt-5">
                <h1>Action menu</h1>
                <div className="py-2 gap-2 flex items-center text-sm cursor-pointer">
                <Bookmark/>
                <span>Save post</span>
                </div>
                <div className="py-2 gap-2 flex items-center text-sm cursor-pointer">
                <Trash2/>
                <span>Delete post</span>
                </div>
        </div>
     );
}
 
export default Postmenuaction;