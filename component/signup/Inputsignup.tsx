import React from 'react'
type Inputplaceholder={
    placeholdername:string;
}

function Inputsignup({placeholdername}:Inputplaceholder) {
  return (
     <input type="text" placeholder={placeholdername} className='bg-white text-black-100 rounded-4xl w-[340px] h-[30px] p-5'/>
  )
}

export default Inputsignup
