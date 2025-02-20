import { Search } from "lucide-react";

const Searchmenue = () => {
    return ( 
        <div className="bg-purple-200 border border-black p-2 rounded-full flex items-center gap-2 ">
            <Search/>
            <input type="text" placeholder="Search" className="bg-purple-200 text-black  border-black"/>
        </div>
     );
}
 
export default Searchmenue;