import { useState } from "react";
import Image from "./image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

        const Navbar = () => { 
            
            const [openmenu,isopenmenu]=useState(false)
            return ( 
                <div className="w-full h-16 md:h-20 flex items-center justify-between">
                        <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
                            <Image src="logo.png" className="w-8 h-8" alt='logo' w={32} h={32}/>
                            <span>Blogin</span>
                        </Link>
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
                    <Link to="/">Home</Link>
                    <Link to="/">Terending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    
                </div>
                <SignedOut>

                <Link to="/login">
                    <button className="py-2 px-4 rounded-2xl bg-amber-300 text-white">
                        Login
                    </button>
                    </Link>
       
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>  
     );
}
 
export default Navbar;