import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react';
const Image = ({src,alt,className,w,h}) => {
   
    return ( 
        <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
         path={src} 
         alt={alt}
         className={className} 
         loading='lazy'
         lgip={{active:true , quality:20}}
        width={w}
        height={h} 
        transformation={[
            {
                with:w,
                height:h
            }
        ]}        
         />
     );
}

 
export default Image;