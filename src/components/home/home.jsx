import { MenuOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'

export default function Home() {
  return (
    <div>
        <div className='bg-[#67B0DB] w-1/4 m-auto h-screen rounded-lg '>
            <div className='flex justify-around items-center pt-10'>
                <div className="cursor-pointer rounded-md text-[20px] bg-gray-500 w-10 text-center">
                    <MenuOutlined
                    //   onClick={(e) => handlemanu()}
                    />
                </div>
          <div className="text-white font-semibold relative">
                <input
                  className="text-[20px] text-black rounded-md  "
                  type="text"
                  placeholder="Enter city/town..."
                  //   onChange={(e) => setSearch(e.target.value)}
                  />
                  {/* <div>{weather.name}</div> */}
              <div className="absolute text-black bottom-[-3px] left-52 text-[25px] ">
                <SearchOutlined
                  className="cursor-pointer"
                //   onClick={searchPressed}
                />
                 </div>
              </div>
          <div className="cursor-pointer text-[20px] rounded-md bg-gray-500 w-10 text-center">
            <ReloadOutlined  />
          </div>
            </div>
        </div>
        







    </div>
  )
}
