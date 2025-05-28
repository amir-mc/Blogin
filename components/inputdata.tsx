'use client'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";





const InputData = () => {

    return ( 


         <form   className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      
      <h2 className="text-2xl font-bold mb-6">Add New </h2>
      <div className=" flex justify-end">
     

      </div>
    
      <div className="space-y-6">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 ">
            Title
          </label>
          <Input   id="name" placeholder="Enter Title"required />
          <p className="mt-1 text-sm text-gray-500">Minimum 2 characters</p>
        </div>
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 ">
            excerpt
          </label>
          <Input   id="name" placeholder="Enter excerpt"required />
          <p className="mt-1 text-sm text-gray-500">Minimum 2 characters</p>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <Textarea
         
            id="description"
            placeholder="Enter product description"
            className="min-h-[120px]"
            required
        
          />
          <p className="mt-1 text-sm text-gray-500">Minimum 10 characters</p>
        </div>
        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            quotation
          </label>
          <Textarea
         
            id="description"
            placeholder="Enter quotation"
            className="min-h-[120px]"
            required
        
          />
          <p className="mt-1 text-sm text-gray-500">Minimum 10 characters</p>
        </div>

        {/* Product Images (UI only) */}
        <div>
         {/* {products?.id && <ImageUpload productId={products?.id} />  */}

         
        </div>

        {/* Form Actions */}
        <div className="flex justify-between items-center">
            {/* Left-aligned button (Back to Product) */}
            <Button type="button" variant="outline">
                 Back to Product
                </Button>

            {/* Right-aligned buttons (Cancel & Edit/Add) */}
            <div className="flex gap-4">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">
                Upload
                {/* {products?.id ? "Edit Product" : "Add Product"} */}
              </Button>
            </div>
          </div>
      </div>
    </div>
   </form>
     );
}
 
export default InputData;