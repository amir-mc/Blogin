'use client'
import { Image } from "@imagekit/next";

const ImageToolkits = ({src,width,height,alt,className}:{src:string,width:number,height:number,alt:string,className:string}) => {
    return ( 
         <Image
                      urlEndpoint={process.env.NEXT_PUBLIC_IMAGETOOLKIT_ENDPOINT}
                      src={src}
                      width={width}
                      height={height}
                      alt={alt}
                       className={className}
                      />
     );
}
 
export default ImageToolkits;