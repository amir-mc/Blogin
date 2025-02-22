import { Link } from "react-router-dom";
import Image from "./image";

const Featurepost = () => {
    return ( 
        <div className="mt-8 flex flex-col lg:flex-row gap-8 ">
            <div className="w-full lg:w1/2 flex flex-col gap-4 ">
                <Image src='featured1.jpeg' alt='image' className='rounded-3xl object-cover' w='895'/>
                
                <div className="flex items-center gap-4 ">
                    <h1 className="font-semibold lg:text-lg">
                        01
                    </h1>
                    <Link className="text-purple-500 lg:text-lg ">Web/</Link>
                    <span className="text-gray-500">1 day</span>
                </div>
                <Link to='/' className="text-xl lg:text-3xl font-semibold lg:font-bold ">
                Nostrud in aliquip est do.
                </Link>
            </div>
           <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/2 aspect-video">
                    <Image
                    className='rounded-3xl object-cover w-full h-full'
                    w='298'
                    src='featured2.jpeg'>
                    
                    </Image>
                    </div>
                    <div className="w2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">
                               02. 
                            </h1>
                            <Link className="text-purple-500">web</Link>
                            <span>1 day</span>
                        </div>
                        <Link className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-sm font-medium" to='/test'>Commodo dolor quis incididunt qui aliqua occaecat eu amet commodo. Elit tempor labore quis </Link>
                    </div>
                 </div>
                 <div className="lg:h-1/3 flex justify-between gap-4">
                 <div className="w-1/2 aspect-video">
                    <Image
                    className='rounded-3xl object-cover w-full h-full'
                    w='298'
                    
                    src='featured3.jpeg'>
                    
                    </Image>
                    </div>
                    <div className="w2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">
                               02. 
                            </h1>
                            <Link className="text-purple-500">web</Link>
                            <span>1 day</span>
                        </div>
                        <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-sm font-medium" to='/test'>Commodo dolor quis incididunt qui aliqua occaecat eu amet commodo. Elit tempor labore quis </Link>
                    </div>
                 </div>
                 <div className="lg:h-1/3 flex justify-between gap-4">
                 <div className="w-1/2 aspect-video">
                    <Image
                    className='rounded-3xl object-cover w-full h-full'
                    w='298'
                    src='featured4.jpeg'>
                    
                    </Image>
                    </div>
                    <div className="w2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">
                               02. 
                            </h1>
                            <Link className="text-purple-500">web</Link>
                            <span>1 day</span>
                        </div>
                        <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-sm font-medium" to='/test'>Commodo dolor quis incididunt qui aliqua occaecat eu amet commodo. Elit tempor labore quis </Link>
                    </div> 
                 </div>
       
           </div>

            
        </div>
     );
}
 
export default Featurepost;