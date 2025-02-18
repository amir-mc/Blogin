import { SignIn } from "@clerk/clerk-react";

const Loginpage = () => {
    return ( 
        <div className="items-center justify-center flex h-[calc(100vh-80px)]">
            <SignIn signUpUrl="/register"/>
            </div>
     );
}
 
export default Loginpage;