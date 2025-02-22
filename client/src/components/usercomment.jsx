import Image from "./image";

const UserComments = () => {
    return ( 
        <div className="p-4 mt-5 bg-slate-400 rounded-xl mb-8 ">
            <div className="flex items-center gap-5 ">
                <Image 
                src='userImg.jpeg'
                className="w-10 h-10 rounded-full object-cover "
                w="40"
                />
                <span className="font-medium"> amir </span>
                <span className="text-sm text-gray-300">2day</span>
            </div>
            <div className="mt-4">
                <p>
                    `Non occaecat nulla quis cillum aute. Incididunt eiusmod excepteur sint laboris aliquip sit officia elit duis eu voluptate ipsum nulla do. Veniam magna occaecat elit officia anim exercitation magna.`
                </p>
            </div>
        </div>
     );
}
 
export default UserComments;