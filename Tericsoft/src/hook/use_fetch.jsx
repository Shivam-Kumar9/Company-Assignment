import { useEffect, useState } from "react";



export default function  useFetch(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
   async function fetchData(link){
      setLoading(true)
       try {
           const res = await fetch(link)
           if(!res.ok) throw new Error('Some problem from server response') 
           const result = await res.json()
           console.log(result);
           setData(result)
         } catch (error){
          console.log(error)
          setError(error)
         }
       finally{
        setLoading(false)
       }
   }
    
   useEffect( ()=>{fetchData(url)},[url])

   return {data , loading, error}
}