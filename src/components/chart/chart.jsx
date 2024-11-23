import React, { useState } from 'react'

function Chart({time, forecast, temp}) {
    

  return (
    <div className='bg-[#67B0DB] w-1/4 '>
        <div className='flex flex-col items-center justify-center rounded-2xl ml-3 w-20 h-32 bg-slate-600'>
            <div className='font-semibold text-white '>
                {time}
            </div>
            <div className=''>
                <img className="w-16" src={forecast}  />
            </div>
            <div className='font-semibold text-white'>
                {temp}
            </div>
        </div> 
    </div>
  )
}

export default Chart