'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
const TopBar = () => {
  const router = useRouter();
  return (
    <header className="text-blue-100 flex justify-between items-center p-2">
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 rounded-full p-1">
          <Image
            src="/chain-svgrepo-com.svg"
            alt="Chain Icon"
            width={30}
            height={30}
          />
        </div>
        <span className="text-xl font-semibold">ShortenIt</span>
      </div>

      <div className="flex space-x-4">
        <button onClick={() => router.push('/signup')} className="shadow-[inset_0_0_0_2px_#616467] text-blue-100 px-4 py-1.5 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200">
          Signup
        </button>
        <button className="shadow-[inset_0_0_0_2px_#616467] text-blue-100 px-4 py-1.5 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200">
          Create Account
        </button>
      </div>
    </header>
  );
};

export default TopBar;
