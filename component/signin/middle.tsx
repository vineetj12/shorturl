"use client"
import React, { useState } from 'react'
import Inputsignup from '../signup/Inputsignup'
import axios from 'axios';
function Signinmid() {
  async function onclick():Promise<void>{
    const response=await axios.post(`/api/signin`,{username:username,password:password});
    const data=response.data.mes;
    alert(data)
    setpassword("");
    setusername("");
  }
  const[username,setusername]=useState("");
  const[password,setpassword]=useState("");
  return (
    <div className='grid pt-17 pb-17 w-[500px] h-[600px] rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.3)] flex-col justify-center'>
      <div className='font-bold text-2xl'>Sign in</div>
      <Inputsignup placeholdername='Enter Your Name' value={username} setvalue={setusername}/>
      <Inputsignup placeholdername='Password' value={password} setvalue={setpassword}/>
      <button className='cursor-pointer font-bold bg-purple-100 text-black-100 rounded-4xl w-[340px] h-[40px]' onClick={onclick}>Sign in</button>
      <div className='flex justify-center'>or sign in with</div>
      <div className='flex justify-evenly'>
        <button className='cursor-pointer shadow-[0_0_60px_rgba(98,148,235,0.7)] hover:shadow-[0_0_60px_rgba(98,148,235)] rounded-4xl w-[140px] h-[40px]'>Google</button>
        <button className='cursor-pointer shadow-[0_0_60px_rgb(98,148,235,0.7)] hover:shadow-[0_0_60px_rgba(98,148,235)] rounded-4xl w-[140px] h-[40px]'>Facebook</button>
      </div>
    </div>
  )
}

export default Signinmid
