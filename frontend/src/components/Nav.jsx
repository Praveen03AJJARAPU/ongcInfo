import React from 'react'

const nav = () => {
  return (
    <div className="p-4 bg-gray-400 flex items-center justify-between ">
    <div>
        <p className='text-black font-bold text-md md:text-2xl' >12/06/2024 (Wednesday)</p>
        </div>
        <div className="flex items-center gap-1 md:gap-3 ">
            <p className="bg-red-600 py-2 px-2 w-max items-center rounded-md text-white">Feedback</p>
            <p className="bg-red-600 py-2 px-2 w-max items-center rounded-md text-white">Admin Login</p>
        </div>
    
    </div>
    )
}

export default nav