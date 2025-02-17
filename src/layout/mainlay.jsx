import { Outlet } from "react-router-dom";
import App from "../App";
import Navbar from "../components/navbar";

const MainLayout = () => {
    return ( 
             <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64" >
                    <Navbar/>
                    <Outlet/>
             </div> 
    );
}
 
export default MainLayout;