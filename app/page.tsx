"use client";
import ShortBox from "@/component/ShortBox";
import Textondashboard from "@/component/Textondashboard";
import TopBar from "@/component/TopBar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  localStorage.setItem("username", session?.user?.name || ""); 
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
