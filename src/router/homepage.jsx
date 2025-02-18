import { Link } from "react-router-dom";

const Homepage = () => {
    return ( 
        <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
                <Link to='/'>Home </Link>
                <span>.</span>
                <p>
                    Articles and <span className="text-purple-800">Blog</span>
                </p>
               
                </div> 

                <div className="flex items-center justify-between ">
                    <div className="">
                            <h1 className="text-gray-500 text-2xl md:text-3xl lg:text-4xl font-bold">
                                new web blog Page
                            </h1>
                            <p className="mt-8 text-md md:text-xl">
                                Nulla nulla labore eu nostrud mollit. Exercitation mollit aute consectetur officia voluptate veniam est pariatur. 
                            </p>
                        </div>
                        <Link to='/write' className=" hidden md:block relative ">
                <svg 
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className="text-lg tracking-wider animateeee-spin animDur"
                >
                    <path
                    id="circlePath"
                    fill="none"
                    d="M 100, 100 m-75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                      <text>
                    <textPath href="#circlePath" startOffset='0%'>Share Your story</textPath>
                    <textPath href="#circlePath" startOffset='50%'>Give your Idea</textPath>
                </text>
                </svg>
            
              
                </Link>
                </div>
                
            
        </div>
     );
}
 
export default Homepage;