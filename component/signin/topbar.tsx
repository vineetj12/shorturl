'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Topbar = () => {
  const router = useRouter();
  return (
    <div className='flex justify-between'>
      <div className='font-bold m-6' onClick={() => router.push('/')} style={{ cursor: "pointer" }}>URL Shortener</div>
      <div className='flex space-x-1 m-6'>
        <div>dont have a account?</div>
        <div onClick={() => router.push('/signup')} style={{ cursor: "pointer" }}>sign up</div>
      </div>
    </div>
  )
}

export default Topbar