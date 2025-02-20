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
        <div>
            <h1 >
                create Post
            </h1>
            <form>
                <button>
                    Add a cover
                </button>
                <input type="text" placeholder="story"/>
                <div>
                    <label htmlFor="USecate">
                            choose a cat
                    </label>
                    <select name="cat" id="">
                        <option value="gen">gen</option>
                        <option value="ben">ben</option>
                        <option value="ten">ten</option>

                    </select>
                </div>
                    <textarea name="des" id="" placeholder="discription a mini"/>
                    <ReactQuill theme="snow" />
                    <button></button>

            </form>
        </div>
     );
}
 
export default Write;