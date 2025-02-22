import UserComments from "./usercomment";

const Comments = () => {
    return ( 
        <div className="felx flex-col gap-8 lg:w-3/5 ">
            <h1 className="text-xl text-gray-300 underline">
                Give a Comment
            </h1>
            <div className="flex items-center justify-between gap-8 w-full ">
                <textarea placeholder="cOmMeNt" className="w-full p-4 rounded-xl "/>
                <button className="bg-purple-500 px-4 py-3 text-black font-medium rounded-xl" >Send</button>
            </div>
            <UserComments/>
            <UserComments/>
            <UserComments/>
            <UserComments/>
            <UserComments/>
            <UserComments/>
            <UserComments/>
        </div>
     );
}
 
export default Comments
