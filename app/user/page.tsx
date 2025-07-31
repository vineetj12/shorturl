"use client"
 import React from 'react'
 import { useRecoilState } from "recoil";
 import { useEffect, useState } from "react";
 import axios from "axios";
 import { history } from "@/component/Atoms";
 import { useSession } from 'next-auth/react';
 function page() {
    const { data:session,status } = useSession();
    const [data,setdata]=useRecoilState(history);
    useEffect(()=>{
    if(status!=="authenticated") return;
    async function history(){
       const data = await axios.get("/api/user", {
        params: { username:session?.user?.name },
      });
      setdata(data.data.data);
    }
    history();
  },[]);
   return (
     <div>
       {data}
     </div>
   )
 }
 
 export default page
 