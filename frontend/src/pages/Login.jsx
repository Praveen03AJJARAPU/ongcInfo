import img from '../assets/loginPage.jpg'
import Logo from '../assets/logo.png'
import { IoEyeSharp } from "react-icons/io5";
const Login = () => {
    return (
      <div className="   overflow-hidden flex md:flex-row flex-col-reverse  justify-between  items-center md:items-center">
        <div className="flex flex-col gap-6  md:gap-[70px]  ">
          <div className="flex flex-col  px-[100px] md:px-[120px]">
            <p className="  text-3xl md:text-6xl font-bold pt-9   md:pb-4">
              Welcome
            </p>
            <p className=" text-red-700 font-bold text-md md:text-4xl">
              Rajahmundry Asset Intranet
            </p>
          </div>
          <div className="flex flex-col gap-6 text-xl md:text-3xl px-[100px] md:pl-[120px] ">
            <div>
              <input
                className="outline-none border-b-2 border-black    "
                type="integer"
                name=""
                id=""
                placeholder="cpf number"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="relative">
                <input
                  className="outline-none border-b-2 border-black mt-4 mb-4"
                  type="password"
                  name=""
                  id=""
                  placeholder="password"
                />
                <div className="absolute right-0 top-0 mt-4 mr-4">
                  <IoEyeSharp />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <input
              className="bg-red-700 text-white md:py-3 :ml-[170px] ml-[120px] items-center flex  rounded-xl  md:text-3xl  text-center "
              type="login"
              value="login"
            />
          </div>
        </div>
        
        {/* <div className="relative">
          <div className='w-screen md:w-full'>
            <img className="w-full object-cover h-[350px] md:h-[730px] " src={img} alt="" />
          </div>
          
    <div className="relative">
      <img 
        className=" rounded-[80px] h-[50px] md:h-[130px] w-[50px] md:w-[130px]"
        src={Logo}
        alt=""
      />
    </div>
  </div> */}
  <div className="relative">
  <div className='w-screen md:w-full'>
    <img className="w-full object-cover h-[350px] md:h-[730px] " src={img} alt="" />
    <div className="absolute top-5 right-5 md:top-9 md:right-9">
      <img 
        className="rounded-[80px] h-[50px] md:h-[130px] w-[50px] md:w-[130px]"
        src={Logo}
        alt=""
      />
    </div>
  </div>
</div>

</div>

     
     

   


   
  );
}

export default Login