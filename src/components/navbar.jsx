const Navbar = () => {
    return ( 
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
                <div className="flex items-center gap-4 text-2xl font-bold">
                    <img src="./logo.png" alt="logo" className="w-8 h-8" />
                    <span>Blogin</span>
                </div>
                {/* moblie menu */}
                <div className="md:hidden ">m</div>
                {/* destop menu */}
                <div className="hidden md:flex">D</div>
        </div>  
     );
}
 
export default Navbar;