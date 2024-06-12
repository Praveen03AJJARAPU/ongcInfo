import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
const Nav = () => {
  const [close,setclose] = useState(false)

  return ( 
    
    <div>
      <div className="p-4 bg-zinc-700 flex items-center justify-between ">
        <div>
          <p className="text-black font-bold text-md md:text-2xl">
            12/06/2024 (Wednesday)
          </p>
        </div>
        <div className="flex items-center gap-1 md:gap-3 ">
          <p className="bg-red-600 py-2 px-2 w-max items-center rounded-md text-white">
            Feedback
          </p>
          <p className="bg-red-600 py-2 px-2 w-max items-center rounded-md text-white">
            Admin Login
          </p>
        </div>
      </div>

      <div className="bg-zinc-300 justify-between items-center flex gap-11">
        <div className='flex'>
          <img className="h-[120px] w-[120px] px-3 py-3" src={Logo} alt="" />
          <div className="font-bold text-xl items-center py-7 ">
            <p className="text-blue-800">RAJAHMUNDRY ASSET INTRANET </p>
            <p className="text-green-800">राजमुंदरी एसेट इंट्रानेट</p>{" "}
          </div>
        </div>
      {  
      close ?
      (<div className='m-5'>
          <IoMenu size={40} />
          
        </div>)
        :
        (<div>
          <li>
            <ul></ul>
          </li>
        </div>)
        }
      
        
      </div>
    </div>
  );
}

export default Nav