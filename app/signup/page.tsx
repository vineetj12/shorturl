import React from 'react'
import Signuptopbar from '@/component/signup/Signuptopbar'
import Bottomofsignup from '@/component/signup/Bottomofsignup'
function page() {
  return (
    <div className='bg-black-100 min-h-screen text-white'>
     <Signuptopbar />
     <Bottomofsignup />
    </div>
  )
}

export default page