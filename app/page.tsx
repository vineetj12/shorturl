"use client";
import Textondashboard from "@/component/Textondashboard";
import TopBar from "@/component/TopBar";
export default function Home() {
  return (
<div className="min-h-screen bg-black-100 text-white flex flex-col overflow-hidden">
      <TopBar />
      <div className="flex flex-col justify-center items-center flex-1 p-4">
      <Textondashboard />
      </div>
    </div>
  );
}
