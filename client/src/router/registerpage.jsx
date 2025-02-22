import { SignUp } from "@clerk/clerk-react";

const Registerpage = () => {
    return ( 
        <div className="items-center justify-center flex mt-5 ">
          <SignUp signInUrl="/login"/>
        </div>
     );
}
 
export default Registerpage;