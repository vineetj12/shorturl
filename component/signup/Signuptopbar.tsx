import React from 'react'

const Signuptopbar = () => {
  return (
    <div className='flex justify-between'>
      <div className='font-bold m-6'>URL Shortener</div>
      <div className='flex space-x-1 m-6'>
        <div>Already have an account?</div>
        <div>log in</div>
      </div>
    </div>
  )
}

export default Signuptopbar
