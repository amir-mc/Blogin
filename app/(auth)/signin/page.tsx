'use server'



import Sgininbut from "@/components/auth/sgin-in";
import SgininbOut from "@/components/auth/sgin-out";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

       
          <div className="mb-4">

            <Sgininbut/>
            
          </div>
         
          <div className="mb-4">
       
        </div>
         
      
      </div>
    </div>
  );
}