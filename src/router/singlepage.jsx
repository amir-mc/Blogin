import Image from "../components/image";
import { Link } from "react-router-dom";

const SinglePage = () => {

    return ( 
        <div className="flex flex-col gap-8 ">
                <div className="flex gap-8 ">
                    <div className="lg:w-3/5 flex flex-col gap-8 ">
                        <h1 className="">
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

                        />
                    </div> 
                </div>
        </div>
     );
}
 
export default SinglePage;