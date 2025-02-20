import { useUser } from "@clerk/clerk-react";
import 'quill/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
const Write = () => {
     const{isLoaded,isSignedIn}=useUser();
     if(!isLoaded){
         return(
             <div>LOADING</div>
         )
     }
     if(isLoaded && !isSignedIn){
         return(
             <div>Just sigin IN</div>
         )
     }
    return ( 
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-1 ">
            <h1 className="text-xl font-light" >
                create Post
            </h1>
            <form className="flex flex-col gap-3 flex-1 mb-2">
                <button className="p-2 w-max shadow-md rounded-xl text-sm bg-slate-500 text-purple-400 ">
                    Add a cover
                </button>
                <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="story"/>
                <div className="flex items-center gap-4">
                    <label className="text-sm" htmlFor="USecate">
                            choose a cat
                    </label>
                    <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
                        <option value="gen">gen</option>
                        <option value="ben">ben</option>
                        <option value="ten">ten</option>

                    </select>
                </div>
                    <textarea className="p-2 rounded-xl bg-white shadow-md" name="des" id="" placeholder="discription a mini"/>
                    <ReactQuill className="flex-1  rounded-xl bg-white shadow-md" theme="snow" />
                    <button className=" p-2  bg-purple-600 text-sm    text-black font-medium rounded-xl mt-8  w-64 ">Send </button>

            </form>
        </div>
     );
}
 
export default Write;