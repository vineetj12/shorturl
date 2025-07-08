"use client"
import React,{ ChangeEvent } from 'react'
type Inputplaceholder={
    placeholdername:string;
    value:string
    setvalue:(value:string)=>void;
}


function Inputsignup({placeholdername,value,setvalue}:Inputplaceholder) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setvalue(e.target.value);
    };
  return (
     <input value={value} onChange={handleChange} type="text" placeholder={placeholdername} className='bg-white text-black-100 rounded-4xl w-[340px] h-[30px] p-5'/>
  )
}

export default Inputsignup
