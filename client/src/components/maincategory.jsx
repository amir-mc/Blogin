import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Maincategory = () => {
    return ( 
        <div className="hidden md:flex bg-white xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
                <div className="flex-1 flex items-center justify-between flex-wrap ">
                    <Link to='/post'
                    className="bg-purple-600 text-white rounded-full px-4 py-2 " >All Post
                    </Link>
                    <Link to='/post?cat=web-design'
                    className="hover:bg-purple-300 rounded-full px-4 py-2 ">Web Design
                    </Link>
                    <Link to='/post?cat=web-development'
                    className="hover:bg-purple-300 rounded-full px-4 py-2 ">develop
                    </Link>
                    <Link to='/post?cat=web-database'
                    className="hover:bg-purple-300 rounded-full px-4 py-2 ">data
                    </Link>
                    <Link to='/post?cat=web-seo'
                    className="hover:bg-purple-300 rounded-full px-4 py-2 ">seo
                    </Link>
                    <Link to='/post?cat=web-marketing'
                    className="hover:bg-purple-300 rounded-full px-4 py-2 ">market
                    </Link>
                </div>
                <span className="text-xl font-medium">|</span>
                <div className="bg-gray-200 p-2 rounded-full flex items-center gap-2">
                    <Search/>
                    <input type="text" placeholder="search for " className="bg-transparent"/>
                </div>
        </div>
     );
}
 
export default Maincategory;