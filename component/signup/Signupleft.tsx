import React from 'react'
import Image from 'next/image';
function Signupleft() {
  return (
    <div className='bg-black-100 justify-center p-10 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.3)]'>
      <div className='font-bold text-2xl flex justify-center'>Tronsform long links effortlessly!</div>
      <div className='flex justify-center'>Create short, manageable URLs in seconds.</div>
      <div> <Image src="/1669168391669826.gif" alt="image" width={500} height={300} /></div>
      <div className='flex justify-center'>Shorten links anytime, anywhere</div>
    </div>
  )
}

export default Signupleft
