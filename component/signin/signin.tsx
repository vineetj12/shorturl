import React from 'react'
import TopBar from './topbar'
import Signinmid from './middle'
function Signin() {
  return (
    <div>
      <TopBar/>
       <div className='pt-7 flex h-[655px] w-[1440px]  mt-4 justify-around'>
       <Signinmid />
      </div>
    </div>
  )
}

export default Signin
