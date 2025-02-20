import { Link } from "react-router-dom";
import Searchmenue from "./searchmenu";

const MenuSide = () => {
    return ( 
        <div className="px-4 h-max sticky top-8 ">
                    <h1 className="mb-4 text-sm font-medium">Search</h1>
                    <Searchmenue/>
                    <h2 className="mt-8 mb-4 text-sm font-medium "> Filter</h2>
                    <div className="flex flex-col gap-2 text-sm">
                        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sort" value='newest' 
                            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                            newest
                            
                        </label>
                        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sort" value='popular' 
                            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                            must popular
                            
                        </label>
                        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sort" value='Trend' 
                            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                            Trending
                            
                        </label>
                        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sort" value='Oldest' 
                            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                            Oldest
                            
                        </label>
                    
                        <div>
                            <h3 className="mt-8 mb-4 text-sm font-medium">
                                Category
                            </h3>
                            <div className="flex flex-col gap-2 text-sm">
                                <Link className="underline" to='/posts'></Link>
                                <Link className="underline" to='/posts?cat=web-design'>web design</Link>
                                <Link className="underline" to='/posts?cat=web-develop'>web develop</Link>
                                <Link className="underline" to='/posts?cat=web-database'>database</Link>
                                <Link className="underline" to='/posts?cat=web-seo'>search engine</Link>
                                <Link className="underline" to='/posts?cat=web-markting'>web market</Link>
                                
                            </div>
                        </div>
                         
                    </div>
        </div>
     );
}
 
export default MenuSide;