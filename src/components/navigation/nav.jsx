import React from 'react'

function Nav() {
  return (
    <>
    <div className='bg-blue-950 h-screen w-1/4 text-white'>
        <h1 className='border-b-2 text-4xl'>Select City</h1>
        <ul className='ml-2 mt-4'>
           <li className='border-b-[1px] text-xl cursor-pointer  '>Karachi</li> 
           <li className='border-b-[1px] text-xl cursor-pointer mt-4'>Lahore</li> 
           <li className='border-b-[1px] text-xl cursor-pointer mt-4'>Islamabad</li> 
           <li className='border-b-[1px] text-xl cursor-pointer mt-4'>Multan</li> 
           <li className='border-b-[1px] text-xl cursor-pointer mt-4'>Hydrabad</li> 
        </ul>


    </div>
    </>
  )
}

export default Nav