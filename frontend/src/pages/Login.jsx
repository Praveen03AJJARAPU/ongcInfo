import img from '../assets/ongclogin.jpeg'
import Logo from '../assets/logo.png'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from 'react';
const Login = () => {
   const [seen,setSeen] =useState(false)
 
    
    return (
      <div className="    overflow-hidden flex md:flex-row flex-col-reverse  justify-between  items-center md:items-center">
        <div className="flex flex-col   md:gap-[70px] w-max    bg-orange-400  rounded-lg m-11  ">
          <div className="flex flex-col  px-[100px] md:px-[120px]  ">
            <p className="  text-3xl md:text-5xl font-bold pt-14   pb-4 md:pb-4">
              Welcome
            </p>
            <p className=" text-red-700 font-bold text-lg   md:text-2xl">
              Rajahmundry Asset Intranet
            </p>
          </div>
          <div className="flex flex-col gap-6 text-xl md:text-3xl px-[100px] md:pl-[120px] ">
            <div>
              <input
                className="outline-none border-b-2 border-black    "
                type="text"
                name=""
                id=""
                placeholder="cpf number"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="relative">
                <input
                  className="outline-none border-b-2 border-black mt-4 mb-4"
                  type= {
                     seen ? 
                     "text" : "password"
                  }
                  name=""
                  id=""
                  placeholder="password"
                />
                <div className="absolute right-0 top-0 mt-4 mr-4" onClick={() => setSeen((prev) => !prev )} >

              {
                seen ? <IoEyeOff /> : <IoEye />

              }
                 
                </div>
                 </div>
                 
            </div>
          </div>
          <div className="flex items-center justify-center pb-7 mr-[130px] md:mr-150px]">
            <button
              className="bg-red-700 text-white  py-2 px-8   md:py-3 md:px-11 :ml-[170px] ml-[120px] items-center flex  rounded-xl  md:text-3xl  text-center "
                
            > Login </button>
          </div>
        </div>
        
  <div className="relative">
  <div className='w-screen md:w-full'>
    <img className="w-full   object-cover h-[max] md:h-[100vh] " src={img} alt="bridge" />
    <div className="absolute top-5 right-5 md:top-9 md:right-9">
      <img 
        className=" h-[40px] md:h-[100px] w-[40px] md:w-[100px]"
        src={Logo}
        alt="logo"
      />
    </div>
  </div>
</div>

</div>


     

     
     

   


   
  );
}

export default Login