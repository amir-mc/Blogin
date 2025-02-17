import { useState } from "react";

        import Image from "./image";

        const Navbar = () => { 
            
            const [openmenu,isopenmenu]=useState(false)
            return ( 
                <div className="w-full h-16 md:h-20 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-2xl font-bold">
                            <Image src="logo.png" className="w-8 h-8" alt='logo' w={32} h={32}/>
                            <span>Blogin</span>
                        </div>
                {/* moblie menu */} 
                <div className="md:hidden ">
                    <div onClick={()=>isopenmenu((prev)=>!prev)} className="cursor-pointer text-xl ">
                        {openmenu ? 'X':'Ξ'}
                    </div>
                    {/* moblie link */}
                    <div className={`w-full h-screen gap-8 text-xl font-medium flex flex-col items-center justify-center absolute top-16 bg-gray-400 ${openmenu ? '-right-0':'-right-[100%]'} 
                    transition-all ease-in-out`}>
                        menu
                    </div>
                </div>
                {/* destop menu */}
                <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                    <a href="/">Home</a>
                    <a href="/">Terending</a>
                    <a href="/">Most Popular</a>
                    <a href="/">About</a>
                    <a href="/">
                    <button className="py-2 px-4 rounded-2xl bg-amber-300 text-white">
                        Login
                    </button>
                    </a>
                </div>
        </div>  
     );
}
 
export default Navbar;