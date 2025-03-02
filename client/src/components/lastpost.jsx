import { useQuery } from "@tanstack/react-query";
import Postitem from "./postitem";
import axios from "axios";

const fetchPost =async()=>{
//const res= await axios.get('http://localhost:3000/post')
const res= await axios.get(`${import.meta.env.VITE_API_URL}/post`)
return res.data
}
const Lastpost = () => {
    
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>fetchPost()
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
      console.log(data)
      
    
    return ( 
        <div className="felx flex-col gap-12 mb-8">
                <Postitem/>
                <Postitem/>
                <Postitem/>
                <Postitem/>
        </div>
     );
}
 
export default Lastpost;