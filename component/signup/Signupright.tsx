import React from 'react'
import Inputsignup from './Inputsignup'
function Signupright() {
  return (
    <div className='grid bg-amber-400'>
      <div className='font-bold'>GET start for free</div>
      <Inputsignup placeholdername='Enter Your Name'/>
      <Inputsignup placeholdername='Password'/>
      <button className='font-bold bg-purple-100 text-black-100 rounded-4xl w-[340px] h-[40px]'>Sign up</button>
      <div>or sign in with</div>
      <div className='flex justify-evenly'>
        <button className='shadow-[0_0_60px_rgba(98,148,235,0.7)] hover:shadow-[0_0_60px_rgba(98,148,235)] rounded-4xl w-[140px] h-[40px]'>Google</button>
        <button className='shadow-[0_0_60px_rgb(98,148,235,0.7)] hover:shadow-[0_0_60px_rgba(98,148,235)] rounded-4xl w-[140px] h-[40px]'>Facebook</button>
      </div>
    </div>
  )
}

export default Signupright
