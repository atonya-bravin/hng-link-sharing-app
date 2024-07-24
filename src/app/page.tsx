//This is a client component and hence the use of use client
'use client'

/**
 * To make sure that the application is redirected to log-in page immediately it is
 * accessed, I hhave used the useRouter hook from next/navigation.
 * 
 * The push method of useRouter has been used in the useEffect hook to make sure it is
 * prompted imediately this component is loaded.
 */
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {  
  const router = useRouter();
  useEffect(()=>{
    router.push("/log-in");
  },[router])
  return(
    <div></div>
  )
}
