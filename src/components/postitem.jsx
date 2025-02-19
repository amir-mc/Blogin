import { Link } from "react-router-dom";
import Image from "./image";

const Postitem = () => {
    return ( 
        <div className="flex  flex-col mt-14 xl:flex-row gap-8 ">
        <div className="md:hidden xl:block">
            <Image src='postImg.jpeg' alt='post' className='rounded-3xl object-cover ' w='733'/>
        </div>
        <div className="flex flex-col gap-4">
            <Link to='/test' className="text-3xl font-semibold">
            Commodo ad quis enim anim amet duis consequat ut nostrud.
            </Link>
            <div className="flex items-center gap-2 text-purple-500 text-sm">
                <span> BY  </span>
                <Link className="text-purple-700">Amir</Link>
                <span> on  </span>
                <Link className="text-purple-700">web</Link>
                <span> 2day </span>
            </div>
            <p>
                Mollit est ea ut anim reprehenderit enim ullamco eiusmod. Do enim ut nostrud occaecat officia sunt exercitation exercitation elit ex proident ullamco nostrud ullamco. Cupidatat consequat aute qui consectetur reprehenderit eu laborum occaecat in in non. Commodo magna pariatur officia cillum mollit ea dolor.
            </p>
            <Link to='/hava' className="text-purple-500 underline text-sm">Read more</Link>
        </div>
        </div>
     );
}
 
export default Postitem;