"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Signuptopbar = () => {
  const router=useRouter();
  return (
    <div className='flex justify-between'>
      <div className='font-bold m-6' onClick={() => router.push('/')} style={{ cursor: "pointer" }}>URL Shortener</div>
      <div className='flex space-x-1 m-6'>
        <div>Already have an account?</div>
        <div onClick={() => router.push('/signin')} style={{ cursor: "pointer" }}>log in</div>
      </div>
    </div>
  )
}

export default Signuptopbar
