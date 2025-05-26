import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero =  () => {

    return ( 

        <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-16 py-10 ">
        {/* Left Part */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
           Amir Blog
          </h1>
              <Button asChild className="px-30 my-3" variant="outline">
                <Link href='/posts'>
                   Read My Blog
                </Link>
            </Button>
        </div>
        {/* Right Part */}
      </section>
        
            

     );
}
 
export default Hero;