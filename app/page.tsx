"use client";
import ShortBox from "@/component/ShortBox";
import Textondashboard from "@/component/Textondashboard";
import TopBar from "@/component/TopBar";
import { useSession } from "next-auth/react";
import { history } from "@/component/Atoms";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
export default function Home() {
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
    console.log(data);
  },[status]);
  return (
    <div className="min-h-screen bg-black-100 text-white flex flex-col overflow-hidden">
      <TopBar status={status}/>
      <div className="flex flex-col justify-center items-center flex-1 p-4">
        <Textondashboard />
        {status !== "unauthenticated" && <ShortBox />}
      </div>
    </div>
  );
}
