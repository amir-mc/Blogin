import { Facebook, Instagram } from "lucide-react";
import Image from "../components/image";
import { Link } from "react-router-dom";
import Postmenuaction from "../components/postmenuaction";
import Searchmenue from "../components/searchmenu";
import Comments from "../components/comment";


const SinglePage = () => {
  
    return ( 
        <div className="flex flex-col gap-8 ">
                <div className="flex gap-8 ">
                    <div className="lg:w-3/5 flex flex-col gap-8 ">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                            Dolore Lorem nulla mollit aute.
                        </h1>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <span> BY  </span>  
                           <Link className="text-purple-700">Amir</Link>
                           <span> on  </span>
                          <Link className="text-purple-700">web</Link>
                        <span> 2day </span>
                        </div> 
                        <p className="">
                        Mollit est ea ut anim reprehenderit enim ullamco eiusmod. Do enim ut nostrud occaecat officia sunt exercitation exercitation elit ex proident ullamco nostrud ullamco.
                             </p>

                    </div>
                    <div className="hidden lg:block w-2/5">
                        <Image 
                        src='postImg.jpeg'
                        alt='post'
                        w="600"
                        className='rounded-2xl'

                        />
                    </div> 
                </div>
                <div className="flex flex-col md:flex-row gap-20 ">
                    <div className="lg:text-lg flex flex-col gap-6 text-justify">
                        <p>
                            Laboris deserunt eu sunt ad ipsum mollit sint cupidatat. Reprehenderit amet elit consequat nostrud eiusmod magna laborum. Culpa Lorem velit adipisicing ea dolore labore eiusmod enim do ea Lorem do. Aute ex mollit magna enim incididunt qui pariatur exercitation ex. Lorem labore in sint nostrud aliqua et. Ea anim labore aliqua nulla pariatur tempor reprehenderit labore anim labore adipisicing. Exercitation duis fugiat id deserunt culpa fugiat nisi.
                        </p>
                        <p>
                            Laboris deserunt eu sunt ad ipsum mollit sint cupidatat. Reprehenderit amet elit consequat nostrud eiusmod magna laborum. Culpa Lorem velit adipisicing ea dolore labore eiusmod enim do ea Lorem do. Aute ex mollit magna enim incididunt qui pariatur exercitation ex. Lorem labore in sint nostrud aliqua et. Ea anim labore aliqua nulla pariatur tempor reprehenderit labore anim labore adipisicing. Exercitation duis fugiat id deserunt culpa fugiat nisi.
                        </p>
                        <p>
                            Laboris deserunt eu sunt ad ipsum mollit sint cupidatat. Reprehenderit amet elit consequat nostrud eiusmod magna laborum. Culpa Lorem velit adipisicing ea dolore labore eiusmod enim do ea Lorem do. Aute ex mollit magna enim incididunt qui pariatur exercitation ex. Lorem labore in sint nostrud aliqua et. Ea anim labore aliqua nulla pariatur tempor reprehenderit labore anim labore adipisicing. Exercitation duis fugiat id deserunt culpa fugiat nisi.
                        </p>
                        <p>
                            Laboris deserunt eu sunt ad ipsum mollit sint cupidatat. Reprehenderit amet elit consequat nostrud eiusmod magna laborum. Culpa Lorem velit adipisicing ea dolore labore eiusmod enim do ea Lorem do. Aute ex mollit magna enim incididunt qui pariatur exercitation ex. Lorem labore in sint nostrud aliqua et. Ea anim labore aliqua nulla pariatur tempor reprehenderit labore anim labore adipisicing. Exercitation duis fugiat id deserunt culpa fugiat nisi.
                        </p>
                        <p>
                            Laboris deserunt eu sunt ad ipsum mollit sint cupidatat. Reprehenderit amet elit consequat nostrud eiusmod magna laborum. Culpa Lorem velit adipisicing ea dolore labore eiusmod enim do ea Lorem do. Aute ex mollit magna enim incididunt qui pariatur exercitation ex. Lorem labore in sint nostrud aliqua et. Ea anim labore aliqua nulla pariatur tempor reprehenderit labore anim labore adipisicing. Exercitation duis fugiat id deserunt culpa fugiat nisi.
                        </p>
                        <p>
                            Laboris deserunt eu sunt ad ipsum mollit sint cupidatat. Reprehenderit amet elit consequat nostrud eiusmod magna laborum. Culpa Lorem velit adipisicing ea dolore labore eiusmod enim do ea Lorem do. Aute ex mollit magna enim incididunt qui pariatur exercitation ex. Lorem labore in sint nostrud aliqua et. Ea anim labore aliqua nulla pariatur tempor reprehenderit labore anim labore adipisicing. Exercitation duis fugiat id deserunt culpa fugiat nisi.
                        </p>
                        <p>
                            Laboris deserunt eu sunt ad ipsum mollit sint cupidatat. Reprehenderit amet elit consequat nostrud eiusmod magna laborum. Culpa Lorem velit adipisicing ea dolore labore eiusmod enim do ea Lorem do. Aute ex mollit magna enim incididunt qui pariatur exercitation ex. Lorem labore in sint nostrud aliqua et. Ea anim labore aliqua nulla pariatur tempor reprehenderit labore anim labore adipisicing. Exercitation duis fugiat id deserunt culpa fugiat nisi.
                        </p>
                    </div>

                    <div className="px-10 h-max sticky  top-8 ">
                        <h2>
                            Author
                        </h2>
                        <div className="flex items-center gap-8">
                            <Image src="userImg.jpeg" w="48 " h="48" className="w-12 h-12 rounded-full object-cover"/>
                            <Link className="text-purple-600 ">Amir</Link>
                            </div>
                            <p className="mb-3">Consectetur id minim reprehenderit quis aliquip excepteur.</p>
                            
                            <div className="flex gap-2 ">
                                    <Link>
                                        <Instagram/>
                                    </Link>
                                    <Link>
                                        <Facebook/>
                                    </Link>
                            </div>
                        
                        <Postmenuaction/>
                        <h1 className="mt-5 text-purple-700">Category</h1>
                        <div className="flex flex-col gap-2 text-sm">
                            
                            <Link 
                            className="underline"
                            to='/'>
                            All
                            </Link>
                            <Link 
                            className="underline"
                            to='/'>
                            web
                            </Link>
                            <Link 
                            className="underline"
                            to='/'>
                            tab
                            </Link>
                            <Link 
                            className="underline"
                            to='/'>
                            gab
                            </Link>
                        </div>
                        <h2 className="pt-3">Saerch</h2>
                        <Searchmenue/>
                    </div>
                </div>
                <Comments/>
        </div>
     );
}
 
export default SinglePage;